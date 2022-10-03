/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig( {
  resolve: {
    alias: {
      "~": path.resolve( __dirname, "src" ),
    },
  },
  server: {
    open: true,
    port: 3003
  },
  plugins: [ react() ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
} );
