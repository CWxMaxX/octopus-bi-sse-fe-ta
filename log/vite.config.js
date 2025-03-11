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
      shared: ["react", "react-dom", "@chakra-ui/react"],
    }),
  ],
  server: {
    port: 5002,
    watch: {
      usePolling: true,
    },
    cors: true,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  }
});
