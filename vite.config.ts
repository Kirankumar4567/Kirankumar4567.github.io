import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "/" works for Vercel, Netlify and https://<username>.github.io
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
