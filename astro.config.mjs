import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  image: {
    service: passthroughImageService(),
  },
});
