import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Defining process.env as an empty object to prevent errors
  define: {
    "process.env": {},
  },
});
