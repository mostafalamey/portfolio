import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // explicit base for deployments that serve the app from the site root (Vercel, Netlify, etc.)
  base: "/",
  plugins: [react(), tailwindcss()],
});
