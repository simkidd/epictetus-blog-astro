import { defineConfig, passthroughImageService } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  image: {
    service: passthroughImageService()
  },
  integrations: [icon()]
});