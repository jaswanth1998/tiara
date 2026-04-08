import { execSync } from 'child_process'
import { createRequire } from 'module'
import { existsSync, mkdirSync } from 'fs'

const require = createRequire(import.meta.url)
const ffmpegPath = require('ffmpeg-static')

const ROOT = '/Users/jaswanthtata/Desktop/projects/Info Tiara/Website'
const OUTPUT = `${ROOT}/public/videos`

if (!existsSync(OUTPUT)) mkdirSync(OUTPUT, { recursive: true })

// Selected videos (smallest/best for web use)
const videos = [
  {
    input: `${ROOT}/assests/media/hf_20260406_192826_190453f4-d6a4-4cd2-860f-6cab665c601f.mp4`,
    output: 'hero-bg',
    description: 'Hero background loop',
  },
  {
    input: `${ROOT}/assests/media/hf_20260407_021408_ddeeef8d-7c83-4a36-acef-a555793b0639.mp4`,
    output: 'ambiance-1',
    description: 'Ambiance clip 1',
  },
  {
    input: `${ROOT}/assests/media/hf_20260406_203940_3de53db0-2058-4cda-8426-fa4cbc92f0e5.mp4`,
    output: 'ambiance-2',
    description: 'Ambiance clip 2',
  },
  {
    input: `${ROOT}/assests/media/hf_20260407_022151_a2eec3a2-4adf-4cbc-93f5-5dd2016bae4e.mp4`,
    output: 'food-prep',
    description: 'Food preparation clip',
  },
]

for (const video of videos) {
  console.log(`\nProcessing: ${video.description}`)

  const scaleFilter = 'scale=1280:720:force_original_aspect_ratio=decrease,pad=ceil(iw/2)*2:ceil(ih/2)*2'

  // MP4 (H.264) — 720p, CRF 28, fast preset
  const mp4Out = `${OUTPUT}/${video.output}.mp4`
  console.log(`  → MP4...`)
  execSync(
    `"${ffmpegPath}" -y -i "${video.input}" -vf "${scaleFilter}" -c:v libx264 -preset fast -crf 28 -an -movflags +faststart -t 15 "${mp4Out}"`,
    { stdio: 'pipe' }
  )

  // WebM (VP9) — smaller file, better quality
  const webmOut = `${OUTPUT}/${video.output}.webm`
  console.log(`  → WebM...`)
  execSync(
    `"${ffmpegPath}" -y -i "${video.input}" -vf "${scaleFilter}" -c:v libvpx-vp9 -crf 35 -b:v 0 -an -t 15 "${webmOut}"`,
    { stdio: 'pipe' }
  )

  // Generate poster frame from 2 seconds in
  const posterOut = `${OUTPUT}/${video.output}-poster.jpg`
  console.log(`  → Poster...`)
  execSync(
    `"${ffmpegPath}" -y -i "${video.input}" -ss 2 -frames:v 1 -vf "${scaleFilter}" -q:v 5 "${posterOut}"`,
    { stdio: 'pipe' }
  )

  console.log(`  ✓ Done`)
}

console.log('\n✅ All videos processed!')
