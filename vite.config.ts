import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // This is the critical change
    deploymentTarget: 'netlify-functions', 
    server: { entry: "server" },
  },
});