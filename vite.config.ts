import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import Components from 'vite-plugin-components'
import path from "path";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  if (mode === "example") {
    return defineConfig({
      base: `/${pkg.name}/`,
      plugins: [Vue()],
    });
  } else {
    return defineConfig({
      resolve: {
        alias: {
          '~/': `${path.resolve(__dirname, 'src')}/`,
        },
      },
      plugins: [
        Vue(),
        Icons(),
        Components({
        customComponentResolvers: ViteIconsResolver(),
      })],
      build: {
        cssCodeSplit: false,
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: "VueAboutMe",
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ["vue"],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              vue: "Vue",
            },
          },
        },
      },
    });
  }
};
