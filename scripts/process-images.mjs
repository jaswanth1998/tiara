/**
 * Image processing script for Tiara Kebabs & More
 * Converts raw assets to optimized WebP for web delivery.
 *
 * Usage: node scripts/process-images.mjs
 */

import sharp from 'sharp'
import { readdir, mkdir, copyFile, stat } from 'fs/promises'
import { join, basename, extname } from 'path'

const ROOT = process.cwd()
const ASSESTS = join(ROOT, 'assests')
const PUBLIC_IMAGES = join(ROOT, 'public', 'images')

// Output sizes for food photos
const FOOD_SIZES = [
  { suffix: 'lg', width: 1200 },
  { suffix: 'md', width: 600 },
  { suffix: 'sm', width: 300 },
]

// Slug generator: "TiaraKebabs&More_KebabBarg.jpg" → "kebab-barg"
function slugify(filename) {
  return filename
    .replace(/^TiaraKebabs&More_/, '')
    .replace(/\.[^.]+$/, '')
    .replace(/([A-Z])/g, '-$1')
    .replace(/^-/, '')
    .replace(/[()&,]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase()
}

// Slug for mood board / generic files
function genericSlug(filename, prefix) {
  const idx = filename.match(/\d+_\d+_\d+\s*(AM|PM)/i)
  if (idx) {
    // Extract time-based unique part
    const timePart = filename.match(/(\d+)_(\d+)_(\d+)\s*(AM|PM)/i)
    if (timePart) {
      return `${prefix}-${timePart[1]}${timePart[2]}${timePart[3]}${timePart[4]}`.toLowerCase()
    }
  }
  // fallback: use hash of filename
  const hash = filename.split('').reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0)
  return `${prefix}-${Math.abs(hash).toString(36)}`
}

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true })
}

async function processUberEatsPhotos() {
  const srcDir = join(ASSESTS, 'pics', 'Uber Pics')
  const outDir = join(PUBLIC_IMAGES, 'food')
  await ensureDir(outDir)

  const files = (await readdir(srcDir)).filter(f => /\.(jpg|jpeg|png)$/i.test(f))
  console.log(`\n📸 Processing ${files.length} Uber Eats photos...`)

  for (const file of files) {
    const slug = slugify(file)
    const srcPath = join(srcDir, file)

    for (const { suffix, width } of FOOD_SIZES) {
      const outPath = join(outDir, `${slug}-${suffix}.webp`)
      try {
        await sharp(srcPath)
          .resize(width, null, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: suffix === 'lg' ? 80 : suffix === 'md' ? 75 : 70 })
          .toFile(outPath)

        const info = await stat(outPath)
        console.log(`  ✓ ${slug}-${suffix}.webp (${(info.size / 1024).toFixed(1)}KB)`)
      } catch (err) {
        console.error(`  ✗ ${slug}-${suffix}.webp: ${err.message}`)
      }
    }

    // Also generate a JPG fallback at medium size
    const jpgPath = join(outDir, `${slug}-md.jpg`)
    try {
      await sharp(srcPath)
        .resize(600, null, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 75 })
        .toFile(jpgPath)
    } catch (err) {
      console.error(`  ✗ ${slug}-md.jpg: ${err.message}`)
    }
  }
}

async function processMoodBoardImages() {
  const srcDir = join(ASSESTS, 'pics', 'Main Pictures')
  const outDir = join(PUBLIC_IMAGES, 'ambiance')
  await ensureDir(outDir)

  const files = (await readdir(srcDir)).filter(f => /\.(jpg|jpeg|png)$/i.test(f))

  // Select best 8 images (skip the first few, take a spread)
  const selected = files.slice(0, 8)
  console.log(`\n🎨 Processing ${selected.length} mood board images...`)

  for (let i = 0; i < selected.length; i++) {
    const file = selected[i]
    const slug = `ambiance-${String(i + 1).padStart(2, '0')}`
    const srcPath = join(srcDir, file)

    try {
      await sharp(srcPath)
        .resize(1200, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(join(outDir, `${slug}-lg.webp`))

      await sharp(srcPath)
        .resize(600, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 72 })
        .toFile(join(outDir, `${slug}-md.webp`))

      const info = await stat(join(outDir, `${slug}-lg.webp`))
      console.log(`  ✓ ${slug} (${(info.size / 1024).toFixed(1)}KB)`)
    } catch (err) {
      console.error(`  ✗ ${slug}: ${err.message}`)
    }
  }
}

async function processInteriorPhotos() {
  const outDir = join(PUBLIC_IMAGES, 'interior')
  await ensureDir(outDir)

  console.log(`\n🏠 Processing interior photos...`)

  // Process the client-sent ChatGPT interior renders
  const clientSentDir = join(ASSESTS, 'pics', 'client_sent')
  const clientFiles = (await readdir(clientSentDir)).filter(f => /\.(jpg|jpeg|png)$/i.test(f))

  for (let i = 0; i < clientFiles.length; i++) {
    const file = clientFiles[i]
    const slug = `interior-${String(i + 1).padStart(2, '0')}`
    const srcPath = join(clientSentDir, file)

    try {
      await sharp(srcPath)
        .resize(1200, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(join(outDir, `${slug}-lg.webp`))

      await sharp(srcPath)
        .resize(600, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 72 })
        .toFile(join(outDir, `${slug}-md.webp`))

      const info = await stat(join(outDir, `${slug}-lg.webp`))
      console.log(`  ✓ ${slug} (${(info.size / 1024).toFixed(1)}KB)`)
    } catch (err) {
      console.error(`  ✗ ${slug}: ${err.message}`)
    }
  }

  // Process the interior reference
  const interiorRef = join(ASSESTS, 'feedback', 'interior.jpg')
  try {
    await sharp(interiorRef)
      .resize(1200, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(join(outDir, 'interior-ref-lg.webp'))

    await sharp(interiorRef)
      .resize(600, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 72 })
      .toFile(join(outDir, 'interior-ref-md.webp'))

    console.log(`  ✓ interior-ref`)
  } catch (err) {
    console.error(`  ✗ interior-ref: ${err.message}`)
  }
}

async function processFavicons() {
  const outDir = join(PUBLIC_IMAGES, 'logo')
  await ensureDir(outDir)

  console.log(`\n🔥 Generating favicons...`)

  const logoSrc = join(ASSESTS, 'logo.png')
  const sizes = [16, 32, 180, 192, 512]

  for (const size of sizes) {
    const outPath = join(outDir, `favicon-${size}.png`)
    try {
      await sharp(logoSrc)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(outPath)
      console.log(`  ✓ favicon-${size}.png`)
    } catch (err) {
      console.error(`  ✗ favicon-${size}.png: ${err.message}`)
    }
  }

  // OG image from marketing poster
  const marketingDir = join(ASSESTS, 'marketing')
  const marketingFiles = await readdir(marketingDir)
  const poster = marketingFiles.find(f => f.includes('Apr 2'))
  if (poster) {
    try {
      await sharp(join(marketingDir, poster))
        .resize(1200, 630, { fit: 'cover' })
        .jpeg({ quality: 85 })
        .toFile(join(PUBLIC_IMAGES, 'logo', 'og-image.jpg'))
      console.log(`  ✓ og-image.jpg`)
    } catch (err) {
      console.error(`  ✗ og-image.jpg: ${err.message}`)
    }
  }
}

async function main() {
  console.log('🍖 Tiara Kebabs — Image Processing Pipeline\n')
  console.log('='.repeat(50))

  await processUberEatsPhotos()
  await processMoodBoardImages()
  await processInteriorPhotos()
  await processFavicons()

  console.log('\n' + '='.repeat(50))
  console.log('✅ Image processing complete!')

  // Print summary of output sizes
  const dirs = ['food', 'ambiance', 'interior', 'logo']
  for (const dir of dirs) {
    const dirPath = join(PUBLIC_IMAGES, dir)
    try {
      const files = await readdir(dirPath)
      let totalSize = 0
      for (const f of files) {
        const s = await stat(join(dirPath, f))
        totalSize += s.size
      }
      console.log(`  ${dir}/: ${files.length} files, ${(totalSize / 1024 / 1024).toFixed(2)}MB total`)
    } catch {
      // dir may not exist
    }
  }
}

main().catch(console.error)
