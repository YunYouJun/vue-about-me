import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  if (mode === "example") {
    return defineConfig({
      base: `/${pkg.name}/`,
      plugins: [vue()],
    });
  } else {
    return defineConfig({
      plugins: [vue()],
      build: {
        cssCodeSplit: false,
        lib: {
          entry: path.resolve(__dirname, "src/VueAboutMe.vue"),
          name: "MyLib",
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
