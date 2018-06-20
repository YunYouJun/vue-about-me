# vue-about-me

![npm](https://img.shields.io/npm/v/vue-about-me.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/vue-about-me.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/l/vue-about-me.svg?style=for-the-badge)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/vue-about-me.svg?style=for-the-badge)

Display copyright and some links about me.

Use [v-tooltip](https://github.com/Akryum/v-tooltip),
You can override the style of tooltip by reference to [v-tooltip](https://github.com/Akryum/v-tooltip#style-examples).

[Online Demo](https://github.yunyoujun.cn/vue-about-me/)

## How To Use

### Import

```js
// Because use vTooltip
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
// if you need Global Registration
// You can write it in your index.js/main.js
import VueAboutMe from 'vue-about-me'
Vue.use(VueAboutMe)
```

```js

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
logo      | 图标(class) | string | —— | #icon-cloud
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