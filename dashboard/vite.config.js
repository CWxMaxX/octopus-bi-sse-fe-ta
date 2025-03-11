import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./Dashboard": "./src/App.jsx",
        "./CustomDrawer": "./src/components/CustomDrawer/CustomDrawer.jsx",
      },
      shared: ["react", "react-dom", "@chakra-ui/react"],
    }),
  ],
  server: {
    port: 5001,
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
