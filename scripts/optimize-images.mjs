import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imgDir = 'public/assets/images';

async function optimizeImages() {
  try {
    // Optimize portrait (santhosh-portrait-suit-new.jpg)
    const portraitInput = path.join(imgDir, 'santhosh-portrait-suit-new.jpg');
    const portraitOutput = path.join(imgDir, 'santhosh-portrait-suit-new.webp');
    if (fs.existsSync(portraitInput)) {
      await sharp(portraitInput)
        .resize(300, 300, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(portraitOutput);
      console.log('Processed portrait to WebP');
    }

    // Optimize cloud-texture-mask.webp (re-compress)
    const cloudInput = path.join(imgDir, 'cloud-texture-mask.webp');
    const cloudOutput = path.join(imgDir, 'cloud-texture-mask-opt.webp');
    if (fs.existsSync(cloudInput)) {
      await sharp(cloudInput)
        .webp({ quality: 60 })
        .toFile(cloudOutput);
      fs.renameSync(cloudOutput, cloudInput); // overwrite
      console.log('Optimized cloud-texture-mask.webp');
    }

    // Optimize yew-tree-branches.webp
    const yewInput = path.join(imgDir, 'yew-tree-branches.webp');
    const yewOutput = path.join(imgDir, 'yew-tree-branches-opt.webp');
    if (fs.existsSync(yewInput)) {
      await sharp(yewInput)
        .resize(160, 202)
        .webp({ quality: 80 })
        .toFile(yewOutput);
      fs.renameSync(yewOutput, yewInput); // overwrite
      console.log('Optimized yew-tree-branches.webp');
    }

    // Optimize abstract-green-waves.webp
    const wavesInput = path.join(imgDir, 'abstract-green-waves.webp');
    const wavesOutput = path.join(imgDir, 'abstract-green-waves-opt.webp');
    if (fs.existsSync(wavesInput)) {
      await sharp(wavesInput)
        .resize(160, 228)
        .webp({ quality: 80 })
        .toFile(wavesOutput);
      fs.renameSync(wavesOutput, wavesInput); // overwrite
      console.log('Optimized abstract-green-waves.webp');
    }

    console.log('All images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
