import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const imgDir = path.join(projectRoot, "public", "img");

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const entries = await fs.readdir(imgDir, { withFileTypes: true });
  const webps = entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith(".webp"))
    .map((e) => e.name);

  if (webps.length === 0) {
    console.log("No .webp files found in public/img");
    return;
  }

  let converted = 0;
  let skipped = 0;

  for (const file of webps) {
    const inputPath = path.join(imgDir, file);
    const outputName = file.replace(/\.webp$/i, ".png");
    const outputPath = path.join(imgDir, outputName);

    if (await fileExists(outputPath)) {
      skipped += 1;
      continue;
    }

    await sharp(inputPath)
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(outputPath);

    converted += 1;
    console.log(`Converted ${file} -> ${outputName}`);
  }

  console.log(
    `Done. Converted: ${converted}, skipped (already existed): ${skipped}`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
