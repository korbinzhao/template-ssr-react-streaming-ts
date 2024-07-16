import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from 'rollup-plugin-postcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcss({
      extract: true,
      minimize: true,
    })
  ],
  build: {
    rollupOptions: {
      output: {
        name: 'index',
        format: 'umd',
        entryFileNames: "[name].js",
        chunkFileNames: `[name].js`,
        assetFileNames: "[name].[ext]",
      },
    },
    minify: true,
  },
});
