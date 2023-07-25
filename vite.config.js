import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePlugin from "vite-plugin-react-js-as-jsx";

export default defineConfig({
  plugins: [
    react(),
    vitePlugin([], {
      jsxInject: true,
      include: ["node_module/some-third-party-lib"],
    }),
  ],
})
