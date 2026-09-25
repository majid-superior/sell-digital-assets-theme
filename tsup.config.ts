import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "react/index": "src/react/index.ts",
    "icons/index": "src/icons/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  clean: false,
  sourcemap: true,
  treeshake: true,
  external: ["react", "react-dom"],
});
