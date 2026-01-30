import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const INPUT_DIR = '/Users/matt/pics-to-resize'
const OUTPUT_DIR = '/Users/matt/resized-pics'
const SIZES = [360, 640, 960, 1600]

const VALID_EXTS = new Set(['.jpg', '.jpeg', '.png', '.tif', '.tiff'])

fs.mkdirSync(OUTPUT_DIR, { recursive: true })

async function run() {
  for (const file of fs.readdirSync(INPUT_DIR)) {
    const ext = path.extname(file).toLowerCase()
    if (!VALID_EXTS.has(ext)) continue

    const inputPath = path.join(INPUT_DIR, file)
    const baseName = path.parse(file).name

    for (const width of SIZES) {
      const outputPath = path.join(OUTPUT_DIR, `${baseName}-${width}.webp`)

      await sharp(inputPath)
        .rotate() // respects EXIF orientation
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath)

      console.log(`✓ ${outputPath}`)
    }
  }
}

run().catch(console.error)
