import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from 'unplugin-vue-components/vite'
import { resolve } from "path"
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from "unplugin-auto-import/vite"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import ViteComponents from "unplugin-vue-components/vite"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
    ViteComponents({
      resolvers: [
        IconsResolver({
          prefix: "i",
        }),
      ]
    }),
    Icons({ autoInstall: true }),
  ],
})