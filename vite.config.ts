import { defineConfig, UserConfigExport } from "vite";
import Vue from "@vitejs/plugin-vue";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

import path from "path";
import pkg from "./package.json";

const commonConfig: UserConfigExport = {
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Vue(),
    Icons({
      scale: 1,
    }),
    Components({
      dts: true,
      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          // componentPrefix: "",
          // enabledCollections: ['carbon']
        }),
      ],
    }),
  ],
};

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  if (mode === "example") {
    return defineConfig(
      Object.assign(commonConfig, {
        base: `/${pkg.name}/`,
      })
    );
  } else {
    return defineConfig(
      Object.assign(commonConfig, {
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
      })
    );
  }
};
