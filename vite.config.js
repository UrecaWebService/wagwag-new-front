import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // svgr 플러그인 추가
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // svgr 플러그인 추가
  ],
});
