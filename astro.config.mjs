// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://cesarstevens.me",
  integrations: [preact(), icon({
    // Keep the SVG ids from src/icons: SVGO's cleanupIds renames them to a, b, c...
    // in every icon, and icons on the same page end up using each other's gradients.
    svgoOptions: {
      plugins: [{ name: "preset-default", params: { overrides: { cleanupIds: false } } }],
    },
  }), sitemap({
    filter: (page) =>
      !page.includes("/blog/tags") &&
      !page.includes("/blog/techs"),
  }),],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});
