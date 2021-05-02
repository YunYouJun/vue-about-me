# vue-about-me

![npm](https://img.shields.io/npm/v/vue-about-me.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/vue-about-me.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/l/vue-about-me.svg?style=for-the-badge)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/vue-about-me.svg?style=for-the-badge)

[![Demo](https://github.com/YunYouJun/vue-about-me/workflows/Demo/badge.svg)](https://yunyoujun.github.io/vue-about-me/)

Display copyright and some links about me.

- [Demo](https://yunyoujun.github.io/vue-about-me/)
- [vue-about-me | unpkg](https://unpkg.com/vue-about-me)
- [vue-about-me | jsdelivr](https://cdn.jsdelivr.net/npm/vue-about-me)

## Base

- [vue](https://cn.vuejs.org/)

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
import "vue-about-me";

export default {
  components: {
    VueAboutMe,
  },
};
```

### Icon

We use [Iconify](https://iconify.design/).

```html
<!-- add this in your html -->
<script src="https://code.iconify.design/2/2.0.0-rc.6/iconify.min.js"></script>
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

| Attribute | Description | Type          | Options | Default |
| --------- | ----------- | ------------- | ------- | ------- |
| copyright | 显示版权    | Object        | ——      |
| links     | 显示链接    | Array[Object] | ——      |

### copyright

| Attribute | Description  | Type   | Options      | Default                           |
| --------- | ------------ | ------ | ------------ | --------------------------------- |
| name      | 名称         | string | Vue About Me |
| repo      | 项目仓库名称 | string | ——           | Vue-About-Me                      |
| author    | 作者         | string | ——           | YunYouJun                         |
| logo      | 图标名称     | string | ——           | ri:cloud-line (ref icones.js.org) |
| link      | 图标链接     | string | ——           | #                                 |
| color     | 图标颜色     | string | ——           | #0078E7                           |

### links

| Name  | Type   |
| ----- | ------ |
| links | Array  |
| link  | Object |

#### link

| Attribute       | Description | Type | Options | Default     |
| --------------- | ----------- | ---- | ------- | ----------- |
| name            | 名称        |      | ——      |
| color           | 颜色        |      | ——      |
| backgroundColor | 背景颜色    |      | ——      | transparent |
| icon            | 图标名称    |      | ——      |
| label           | 标签提示    |      | ——      |
| href            | 链接        |      | ——      |

#### GitHub Item

Default: `https://github.com/author/repo`
