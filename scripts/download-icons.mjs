import fs from 'node:fs';
import path from 'node:path';

const icons = [
  'logos:aws',
  'logos:docker-icon',
  'logos:terraform-icon',
  'devicon:githubactions',
  'logos:kubernetes',
  'logos:linux-tux',
  'logos:java',
  'logos:python',
  'logos:c',
  'logos:c-plusplus',
  'logos:mysql',
  'logos:microsoft-azure',
  'logos:google-cloud',
  'logos:github-actions',
  'logos:visual-studio-code',
  'logos:git-icon',
  'logos:github-icon',
  'logos:postman-icon',
  'logos:supabase-icon',
  'logos:firebase',
  'logos:redis',
  'logos:github-copilot',
];

const outDir = path.resolve('public/assets/icons');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  for (const icon of icons) {
    const [prefix, name] = icon.split(':');
    const url = `https://api.iconify.design/${prefix}/${name}.svg`;
    console.log(`Fetching ${icon} from ${url}...`);
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${icon}: ${res.status} ${res.statusText}`);
    }
    const svgText = await res.text();
    const fileName = `${prefix}-${name}.svg`;
    fs.writeFileSync(path.join(outDir, fileName), svgText, 'utf-8');
    console.log(`Saved ${fileName} (${svgText.length} bytes)`);
  }
  console.log('All icons downloaded successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

