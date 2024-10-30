import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon(), react()],
  output: "server", // Server output for Netlify
  adapter: netlify({
    edgeMiddleware: true
  }),
});
