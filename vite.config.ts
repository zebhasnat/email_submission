import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig, PluginOption } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [react()];
  
  if (mode === "development") {
    plugins.push(screenGraphPlugin() as any);
  }

  return {
    plugins,
    publicDir: "./static",
    base: "./",
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
    server: {
      host: "127.0.0.1",
      port: 5173,
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
        },
      },
    },
  };
});