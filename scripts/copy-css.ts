import fs from "node:fs";
import path from "node:path";

const srcDir: string = path.resolve("src/css");
const distDir: string = path.resolve("dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

fs.cpSync(srcDir, distDir, { recursive: true });
console.log("CSS files and assets copied to dist/");
