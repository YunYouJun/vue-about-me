<template>
  <div id="app">
    <div class="header">Header</div>
    <div class="main">Main</div>
    <div class="footer">
      <vue-about-me :copyright="copyright" :links="links"></vue-about-me>
    </div>
  </div>
</template>

<script>
import 'element-theme-ink/lib/reset.css'
// import VueAboutMe from '../src/App.vue'
import '../dist/VueAboutMe.umd.js'

export default {
  name: 'example',
  data () {
    return {
      copyright: {
        name: 'Vue About Me',
        repoName: 'Vue-About-Me',
        author: 'YunYouJun',
        logo: '#icon-cloud',
        // logo: 'https://cn.vuejs.org/images/logo.png',
        link: 'https://yunyoujun.github.io/vue-about-me/',
        color: '#0078E7'
      },
      links: [
        {
          name: 'github',
          color: 'black',
          icon: '#icon-github',
          label: 'GitHub 项目代码',
          href: 'https://github.com/YunYouJun/vue-about-me'
        },
        {
          name: 'weibo',
          color: '#DB2828',
          icon: '#icon-weibo',
          label: '微博：机智的云游君',
          href: 'http://weibo.com/jizhideyunyoujun'
        },
        {
          name: 'email',
          color: '#409EFF',
          icon: '#icon-envelope',
          label: '邮箱：me@yunyoujun.cn',
          href: 'mailto:me@yunyoujun.cn'
        },
        {
          name: 'blog',
          color: '#6435C9',
          icon: '#icon-globe',
          label: '博客：yunyoujun.cn',
          href: 'http://www.yunyoujun.cn'
        },
      ]
    }
  },
  components: {
    VueAboutMe
  }
}
</script>

<style lang="scss">
.footer {
  text-align: center;
  background-color: rgb(209, 232, 255);
}

.header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 444px;
}
</style>
