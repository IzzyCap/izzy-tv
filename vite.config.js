import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./__tests__/setup.ts",
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
