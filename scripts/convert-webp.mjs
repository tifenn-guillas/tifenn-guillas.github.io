import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const targets = [
  { src: 'public/assets/images/hero.png', dest: 'public/assets/images/hero.webp', quality: 85 },
  { src: 'public/assets/images/parallax.jpg', dest: 'public/assets/images/parallax.webp', quality: 85 },
  { src: 'public/assets/images/profile.jpg', dest: 'public/assets/images/profile.webp', quality: 85 },
  { src: 'public/assets/images/miniature.jpg', dest: 'public/assets/images/miniature.webp', quality: 85 },
];

// Portfolio images
const portfolioDir = 'public/assets/images/portfolio';
const portfolioFiles = await readdir(portfolioDir);
for (const file of portfolioFiles) {
  const ext = extname(file).toLowerCase();
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    targets.push({
      src: join(portfolioDir, file),
      dest: join(portfolioDir, basename(file, ext) + '.webp'),
      quality: 85,
    });
  }
}

for (const { src, dest, quality } of targets) {
  try {
    const info = await sharp(src).webp({ quality }).toFile(dest);
    console.log(`✓ ${dest} (${(info.size / 1024).toFixed(0)}KB)`);
  } catch (e) {
    console.error(`✗ ${src}: ${e.message}`);
  }
}
