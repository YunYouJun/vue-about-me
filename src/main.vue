<template>
  <div id="vue-about-me">
    <div class="copyright">
      {{ copyright.name?copyright.name:copyright.repoName }}
      <a :href="copyright.link" :style="{'color': copyright.color}">
      <i :class="'logo ' + copyright.logo"></i>
      </a>
      {{ copyright.author }}
    </div>
    <div class="link">
      <el-tooltip 
      v-for="(link, index) in links" 
      :key="index" class="item" effect="light" 
      :content="link.label" 
      placement="top"
      >
        <a class="link-item" ref="link"
        :style="{color: link.color, borderColor: link.color, backgroundColor: link.backgroundColor}"
        :href="link.href" target="_blank"
        @mouseover="hoverStyle(index, link.color)"
        @mouseout="resetStyle(index)">
          <i :class="link.icon"></i>
        </a>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueAboutMe',
  props: {
    copyright: {
      type: Object,
      default: function () {
        return {
          name: 'Vue About Me',
          repoName: 'Vue-About-Me',
          author: 'YunYouJun',
          logo: 'fas fa-cloud',
          link: '#',
          color: 'black'
        }
      }
    },
    links: {
      type: Array,
      default: function () {
        return [
          {
            name: 'github',
            color: 'black',
            icon: 'fab fa-github',
            label: 'GitHub 项目代码',
            href: 'https://github.com/' + this.copyright.author + '/' + this.copyright.repoName
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
  },
  data () {
    return {

    }
  },
  methods: {
    hoverStyle (index, color) {
      this.$refs.link[index].style.backgroundColor = color
    },
    resetStyle (index) {
      let backgroundColor = 'transparent'
      if (this.links[index].backgroundColor) {
        backgroundColor = this.links[index].backgroundColor
      }
      this.$refs.link[index].style.backgroundColor = backgroundColor
    }
  }
}
</script>

<style lang="scss" scoped>
#vue-about-me {
  text-align: center;
  padding: 10px;
  .copyright {
    font-size: 1rem;
    padding-bottom: 10px;
    .logo {
      padding: 0px 5px;
      transition: 0.5s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .link-item {
    display: inline-block;
    font-size: 1rem;
    color: #000;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 2rem;
    transition: .3s;
    align-content: center;
    line-height: 2rem;
    border-radius: 2rem;
    margin: 5px;

    width: 2rem;

    &:hover {
      transform: scale(1.2);
      color: #fff !important;
      text-shadow: 0px 0px 1px #000;
    }
  }
}
</style>
