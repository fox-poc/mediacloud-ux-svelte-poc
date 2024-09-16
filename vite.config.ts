// vite.config.ts for a Vite + React project
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    vitePluginSingleSpa({
      serverPort: 3004,
      spaEntryPoints: "src/spa.tsx",
    }),
  ],
});