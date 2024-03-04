import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    exclude: ["tests", "node_modules"],
    coverage: {
      include: ["src"],
      exclude: ["src/app"],
    },
    env: {
      NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY: "1234",
      NEXT_PUBLIC_MARVEL_PUBLIC_API_URL: "https://gateway.marvel.com",
      MARVEL_PRIVATE_API_KEY: "1234",
    },
    environment: "jsdom",
    alias: {
      "@": "/src",
    },
  },
});
