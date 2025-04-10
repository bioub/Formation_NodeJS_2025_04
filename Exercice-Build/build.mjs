import fs from "node:fs/promises";
import { resolve } from "node:path";
import { createHash } from "node:crypto";
import { minify } from "terser";
import minimist from "minimist";

const args = minimist(process.argv.slice(2))

const distPath = resolve(import.meta.dirname, "dist");
const srcPath = resolve(import.meta.dirname, "src");
const horlogeJsPath = resolve(srcPath, "js", "horloge.js");
const indexJsPath = resolve(srcPath, "js", "index.js");
const indexHtmlPath = resolve(srcPath, "index.html");
const indexHtmlDistPath = resolve(distPath, "index.html");
let appJsDistPath = resolve(distPath, "app.js");

// Depuis ES2022 (Top Level Await) on peut dans un module ESM
// faire un await directement dans le module (sans async function)
await fs.rm(distPath, { recursive: true, force: true });
await fs.mkdir(distPath);

// Lire horloge.js puis index.js (l'un après l'autre)
// et les concaténer dans un seul buffer
// const bufferHorloge = await fs.readFile(horlogeJsPath);
// const bufferIndex = await fs.readFile(indexJsPath);
// const buffer = Buffer.concat([bufferHorloge, bufferIndex]);

// Lire horloge.js et index.js (en même temps)
const buffers = await Promise.all([
  fs.readFile(horlogeJsPath),
  fs.readFile(indexJsPath),
]);

const buffer = Buffer.concat(buffers);
let output = buffer.toString('utf-8');

if (args.minify) {
  const { code } = await minify(buffer.toString('utf-8'));
  output = code;
}

let hash = '';
if (args.hash) {
  hash = createHash("md5").update(output).digest("hex");
  appJsDistPath = appJsDistPath.replace(/app\.js$/, `app.${hash}.js`);
}

await fs.writeFile(appJsDistPath, output);

let content = await fs.readFile(indexHtmlPath, "utf-8");
content = content
  .replace(
    'js/horloge.js',
    (args.hash) ? `app.${hash}.js` : 'app.js'
  )
  .replace('<script src="./js/index.js"></script>', "");

await fs.writeFile(indexHtmlDistPath, content);
