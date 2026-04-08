import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { join, extname } from 'path'
import { existsSync } from 'fs'

const SIZES = {
  lg: 1200,
  md: 600,
  sm: 300,
}

async function processDirectory(inputDir, outputDir, prefix, sizes = SIZES) {
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true })
  }

  const files = await readdir(inputDir)
  const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f))

  console.log(`\nProcessing ${images.length} images from ${inputDir}...`)

  for (let i = 0; i < images.length; i++) {
    const file = images[i]
    const inputPath = join(inputDir, file)
    const baseName = `${prefix}-${String(i + 1).padStart(2, '0')}`

    console.log(`  [${i + 1}/${images.length}] ${file} → ${baseName}`)

    for (const [suffix, width] of Object.entries(sizes)) {
      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(join(outputDir, `${baseName}-${suffix}.webp`))
    }

    // JPG fallback at md size
    await sharp(inputPath)
      .resize(600, null, { withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(join(outputDir, `${baseName}-md.jpg`))
  }

  console.log(`  ✓ Done: ${images.length} images → ${Object.keys(sizes).length} WebP sizes + JPG fallback each`)
}

async function processClientInterior(inputDir, outputDir) {
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true })
  }

  const files = await readdir(inputDir)
  const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f))

  console.log(`\nProcessing ${images.length} client interior photos...`)

  // Get current max interior index
  const existingFiles = existsSync(outputDir) ? await readdir(outputDir) : []
  const existingIndices = existingFiles
    .filter(f => f.startsWith('interior-'))
    .map(f => parseInt(f.match(/interior-(\d+)/)?.[1] || '0'))
  const startIndex = Math.max(0, ...existingIndices) + 1

  for (let i = 0; i < images.length; i++) {
    const file = images[i]
    const inputPath = join(inputDir, file)
    const baseName = `client-interior-${String(i + 1).padStart(2, '0')}`

    console.log(`  [${i + 1}/${images.length}] ${file} → ${baseName}`)

    for (const [suffix, width] of Object.entries({ lg: 1200, md: 600 })) {
      await sharp(inputPath)
        .resize(width, null, { withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(join(outputDir, `${baseName}-${suffix}.webp`))
    }
  }

  console.log(`  ✓ Done`)
}

const ROOT = '/Users/jaswanthtata/Desktop/projects/Info Tiara/Website'

// 1. Process AI-generated food photos
await processDirectory(
  join(ROOT, 'assests/pics/Main Pictures'),
  join(ROOT, 'public/images/ai-food'),
  'ai-dish',
  SIZES
)

// 2. Process client-sent interior photos
await processClientInterior(
  join(ROOT, 'assests/pics/client_sent'),
  join(ROOT, 'public/images/client-interior')
)

console.log('\n✅ All AI photos and client interior photos processed!')
