import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        dashboard: "http://localhost:5001/assets/remoteEntry.js",
        log: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
        "@chakra-ui/react": { singleton: true, requiredVersion: "^3.12.0"},
        highcharts: { singleton: true, requiredVersion: "^12.1.2" },
        "highcharts-react-official": { singleton: true, requiredVersion: "^3.2.1" },
      },
    }),
  ],
  build: {
    target: 'esnext',
  }
});
