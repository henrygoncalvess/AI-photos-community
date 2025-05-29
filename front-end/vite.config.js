import { defineConfig } from "vite";

export default defineConfig({
  root: "public",
  server: {
    port: 3001,
    open: "home.html",
  },
});
