import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",  // Ensures correct routing in Netlify
  build: {
    outDir: "dist",
  },
  server: {
    port: 5173,  // Default Vite port
    open: true,  // Auto-opens browser on `npm run dev`
  },
});
