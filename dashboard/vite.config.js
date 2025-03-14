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
        "./CustomDrawer": "./src/components/CustomDrawer/CustomDrawer.jsx",
        "./StatCard": "./src/components/StatCard/StatCard.jsx",
        "./DailyActiveUsersPieChart": "./src/components/DailyActiveUsersPieChart/DailyActiveUsersPieChart.jsx",
        "./UserActivityLineChart": "./src/components/UserActivityLineChart/UserActivityLineChart.jsx",
      },
      shared:  {
        react: { singleton: true, requiredVersion: "^19.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^19.0.0" },
        "@chakra-ui/react": { singleton: true, requiredVersion: "^3.12.0"},
        highcharts: { singleton: true, requiredVersion: "^12.1.2" },
        "highcharts-react-official": { singleton: true,  requiredVersion: "^3.2.1" },
        'react-router-dom': { singleton: true, requiredVersion: '^7.3.0' },
      },
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
