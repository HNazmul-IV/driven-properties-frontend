import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  build: {
    minify: "esbuild",
  },
  server: {
    port: 3000,
    strictPort: false,
  },
  preview: {
    port: 4000,
    strictPort: false,
  },
};

export default config;
