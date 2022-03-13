# vue-about-me

[![npm](https://img.shields.io/npm/v/vue-about-me.svg?style=for-the-badge)](https://www.npmjs.com/package/vue-about-me)
![npm](https://img.shields.io/npm/dt/vue-about-me.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/l/vue-about-me.svg?style=for-the-badge)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/vue-about-me.svg?style=for-the-badge)

[![Demo](https://github.com/YunYouJun/vue-about-me/workflows/Demo/badge.svg)](https://yunyoujun.github.io/vue-about-me/)

Display copyright and some links about me.

- [Demo](https://yunyoujun.github.io/vue-about-me/)
- [vue-about-me | unpkg](https://unpkg.com/vue-about-me)
- [vue-about-me | jsdelivr](https://cdn.jsdelivr.net/npm/vue-about-me)

## How To Use

### Import

You just need import it, and write it where you need.

Example

```js
// index.js
import Vue from 'vue'
import App from './App.vue'
...
```

```html
<!-- component -->
<template>
  <div>
    <vue-about-me :copyright="copyright" :links="links"></vue-about-me>
  </div>
</template>
```

`<script>`

```js
// use default name VueAboutMe
import VueAboutMe from "vue-about-me";
import "vue-about-me/style.css";
```

### Icon

We use [Iconify](https://iconify.design/).

内置类型：自动生成对应图标

- github
- telegram
- weibo
- twitter
- wechat
- blog
- bilibili

```html
<!-- 仅当你需要额外图标时，添加它 -->
<!-- add this in your html -->
<script src="https://code.iconify.design/2/2.0.0/iconify.min.js"></script>
```

Then find icon name in <https://icones.js.org>.

#### Example

```js
copyright: {
  name: 'Vue About Me',
  repo: 'Vue-About-Me',
  author: 'YunYouJun',
  logo: 'ri:cloud-line',
  // or
  // logo: 'https://cn.vuejs.org/images/logo.png',
  link: 'https://yunyoujun.github.io/vue-about-me/',
  color: '#0078E7'
},
links: [
  {
    // ...
    icon: 'ri:cloud-line'
    // ...
  }
]
```

### Template

```vue
<vue-about-me :copyright="copyright" :links="links"></vue-about-me>
```

You can see [`example`](https://github.com/YunYouJun/vue-about-me/tree/master/example) folder for more details.

## Options

| Attribute | Description                                 | Type             | Options | Default |
| --------- | ------------------------------------------- | ---------------- | ------- | ------- |
| isDark    | 暗色模式 （黑色图标在暗色模式下会变成白色） | Boolean （可选） | -       | false   |
| copyright | 显示版权                                    | Object           | ——      |
| links     | 显示链接                                    | Array[Object]    | ——      |

### copyright

| Attribute | Description            | Type   | Options      | Default                                        |
| --------- | ---------------------- | ------ | ------------ | ---------------------------------------------- |
| name      | 名称                   | string | Vue About Me |
| repo      | 项目仓库名称（GitHub） | string | ——           | Vue-About-Me                                   |
| author    | 作者                   | string | ——           | YunYouJun                                      |
| icon      | 图标名称               | string | ——           | `cloud` 或 `ri:cloud-line` (ref icones.js.org) |
| link      | 图标链接               | string | ——           | #                                              |
| color     | 图标颜色               | string | ——           | #0078E7                                        |

### links

| Name  | Type   |
| ----- | ------ |
| links | Array  |
| link  | Object |

#### link

| Attribute       | Description              | Type   | Options       | Default     |
| --------------- | ------------------------ | ------ | ------------- | ----------- |
| type            | 类型（自动生成对应图标） | string | [Icon](#Icon) | ---         |
| name            | 名称                     |        | ——            |             |
| color           | 颜色                     |        | ——            |             |
| backgroundColor | 背景颜色                 |        | ——            | transparent |
| icon            | 图标名称                 |        | ——            |             |
| label           | 标签提示                 |        | ——            |             |
| href            | 链接                     |        | ——            |             |

## [Sponsors](https://sponsors.yunyoujun.cn)

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/YunYouJun/sponsors/public/sponsors.svg" target="_blank">
    <img src='https://cdn.jsdelivr.net/gh/YunYouJun/sponsors/public/sponsors.svg'/>
  </a>
</p>
