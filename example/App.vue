<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>
        <hr>
        <vue-about-me :copyright="copyright" :links="links"></vue-about-me>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  props: [],
  data () {
    return {
      copyright: {
        projectName: 'Vue-About-Me',
        author: 'YunYouJun',
        logo: 'fas fa-cloud'
      },
      links: [
        {
          name: 'github',
          color: 'black',
          icon: 'fab fa-github',
          label: 'GitHub 项目代码',
          href: 'https://github.com/YunYouJun/vue-about-me'
        },
        {
          name: 'weibo',
          color: '#DB2828',
          icon: 'fab fa-weibo',
          label: '微博：机智的云游君',
          href: 'http://weibo.com/jizhideyunyoujun'
        },
        {
          name: 'email',
          color: '#409EFF',
          icon: 'fas fa-envelope',
          label: '邮箱：me@yunyoujun.cn',
          href: 'mailto:me@yunyoujun.cn'
        },
        {
          name: 'blog',
          color: '#6435C9',
          icon: 'fas fa-globe',
          label: '博客：yunyoujun.cn',
          href: 'http://www.yunyoujun.cn'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-footer {
  text-align: center;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
