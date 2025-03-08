import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "log",
      filename: "remoteEntry.js",
      exposes: {
        "./Log": "./src/App.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5002,
  },
  build: {
    target: 'esnext',
  }
});
