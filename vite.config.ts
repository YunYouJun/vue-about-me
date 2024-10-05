import type { UserConfigExport } from 'vite'
import path from 'node:path'
import Vue from '@vitejs/plugin-vue'

import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

import DTS from 'vite-plugin-dts'
import pkg from './package.json'

const commonConfig: UserConfigExport = {
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'demo')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    DTS({
      include: './src',
    }),
    Vue(),
    Icons({
      scale: 1.1,
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
}

// https://vitejs.dev/config/
export default defineConfig(({ command: _command, mode }) => {
  if (mode === 'example') {
    return defineConfig(
      Object.assign(commonConfig, {
        base: `/${pkg.name}/`,
      }),
    )
  }
  else {
    return defineConfig(
      Object.assign(commonConfig, {
        build: {
          cssCodeSplit: false,
          lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'VueAboutMe',
            formats: ['es', 'cjs'],
            fileName: (format) => {
              const name = 'vue-about-me'
              if (format === 'es') {
                return `${name}.mjs`
              }
              if (format === 'cjs') {
                return `${name}.cjs`
              }
              return `${name}.js`
            },
          },
          rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
              // Provide global variables to use in the UMD build
              // for externalized deps
              globals: {
                vue: 'Vue',
              },
            },
          },
        },
      } as UserConfigExport),
    )
  }
})
