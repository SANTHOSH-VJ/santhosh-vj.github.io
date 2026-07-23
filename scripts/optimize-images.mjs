import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imagesDir = path.join(__dirname, '../public/assets/images');

async function optimizeImages() {
  console.log('Scanning for images in', imagesDir);
  const files = await fs.readdir(imagesDir);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const filePath = path.join(imagesDir, file);
      const name = path.parse(file).name;
      const destPath = path.join(imagesDir, `${name}.webp`);
      
      console.log(`Processing ${file}...`);
      
      let pipeline = sharp(filePath);
      const metadata = await pipeline.metadata();
      
      if (name.includes('abstract-green-waves') || name.includes('yew-tree-branches')) {
        pipeline = pipeline.resize(300, null, { withoutEnlargement: true });
      } else if (name.includes('cloud-texture-mask')) {
        pipeline = pipeline.resize(800, null, { withoutEnlargement: true });
      } else if (metadata.width > 1200) {
        pipeline = pipeline.resize(1200, null, { withoutEnlargement: true });
      }

      await pipeline
        .webp({ quality: 80, effort: 6 })
        .toFile(destPath);
        
      console.log(`Created ${name}.webp`);
    }
  }
  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
