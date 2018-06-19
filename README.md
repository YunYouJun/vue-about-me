# vue-about-me

![npm](https://img.shields.io/npm/v/vue-about-me.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/vue-about-me.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/l/vue-about-me.svg?style=for-the-badge)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/vue-about-me.svg?style=for-the-badge)

Display copyright and some links about me.

Tooltip Consider:

- [popper](https://github.com/FezVrasta/popper.js)
- [hint.css](https://github.com/chinchang/hint.css)
- [tippyjs](https://github.com/atomiks/tippyjs)
- [v-tooltip](https://github.com/Akryum/v-tooltip)

[Online Demo](https://github.yunyoujun.cn/vue-about-me/)

## How To Use

### Import

```js
import VueAboutMe from 'vue-about-me'
```

```js
// if you need Global Registration
// You can write it in your index.js/main.js
Vue.use(VueAboutMe)
```

### Icon

You need have custom icon class name.
You can use [iconfont](http://iconfont.cn/).

#### Example

```js
links: [
  {
    // ...
    icon: 'iconfont icon-cloud'
    // ...
  }
]

```

### Template

```vue
<vue-about-me :copyright="copyright" :links="links"></vue-about-me>
```

You can see [`example`](https://github.com/YunYouJun/vue-about-me/tree/master/example) folder for more details.

## Intend

- [ ] Use [iconfont](http://iconfont.cn/) to replace Font-Awesome.

## Options

Attribute | Description | Type | Options | Default
  ---     |---          | ---  |---      |---
copyright | 显示版权    | Object | —— |
links     | 显示链接    | Array[Object] | —— |

### copyright

Attribute | Description | Type | Options | Default
---       | ---         |---|---|---
name      | 名称        | string | Vue About Me
repoName  | 项目仓库名称 | string | —— | Vue-About-Me
author    | 作者        | string | —— | YunYouJun
logo      | 图标(class) | string | —— | fas fa-cloud
link      | 图标链接    | string | —— | #
color     | 图标颜色    | string | —— | #0078E7

### links

Name|Type
---|---
links | Array
link | Object

#### link

Attribute | Description | Type | Options | Default
---       |---|---|---|---
name      | 名称 | | —— |
color     | 颜色 | | —— |
backgroundColor | 背景颜色 | | —— | transparent
icon      | 图标 | | —— |
label     | 标签提示 | | —— |
href      | 链接 | | —— |

#### GitHub Item

Default: `https://github.com/author/repoName`