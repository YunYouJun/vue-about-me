# vue-about-me

Display copyright and some links about me.

Tooltip use [element-ui](http://element.eleme.io/#/zh-CN)

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

### Template

```vue
<vue-about-me :copyright="copyright" :links="links"></vue-about-me>
```

You can see [`example`](https://github.com/YunYouJun/vue-about-me/tree/master/example) folder for more details.

## Options

Attribute | Description | Type | Options | Default
---|---|---|---|---
copyright | 显示版权 | Object | —— |
links | 显示链接 | Array[Object] | —— |

### copyright

Attribute | Description | Type | Options | Default
---|---|---|---|---
projectName | 项目名称 | string | —— | Vue-About-Me
author | 作者 | string | —— | YunYouJun
logo | 图标（class） | string | —— | fas fa-cloud

### links

Every Link Object

Attribute | Description | Type | Options | Default
---|---|---|---|---
name | 名称 | | —— |
color | 颜色 | | —— |
icon | 图标 | | —— |
label | 标签提示 | | —— |
href | 链接 | | —— |
