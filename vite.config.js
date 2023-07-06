import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
    port: 8000,
  },
  preview: {
    port: 8000,
  },
});
