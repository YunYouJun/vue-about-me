<template>
  <div id="vue-about-me">
    <div class="copyright">
      {{ copyright.name?copyright.name:copyright.repoName }}
      <a :href="copyright.link" :style="{color: copyright.color}">
      <i :class="'logo ' + copyright.logo"></i>
      </a>
      {{ copyright.author }}
    </div>
    <div class="link">
      <a class="link-item" ref="link"
      v-for="(link, index) in links" 
      :key="index"
      v-tooltip="{content: link.label, placement: 'top', trigger: 'hover'}"
      :style="{color: link.color, borderColor: link.color, backgroundColor: link.backgroundColor}"
      :href="link.href" target="_blank"
      @mouseover="hoverStyle(index, link.color)"
      @mouseout="resetStyle(index)">
        <i :class="link.icon"></i>
      </a>
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

  .tooltip {
    display: block !important;
    z-index: 10000;
  }

  .tooltip .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
  }

  .tooltip[x-placement^="top"] {
    margin-bottom: 5px;
  }

  .tooltip[x-placement^="top"] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip[x-placement^="bottom"] {
    margin-top: 5px;
  }

  .tooltip[x-placement^="bottom"] .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip[x-placement^="right"] {
    margin-left: 5px;
  }

  .tooltip[x-placement^="right"] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip[x-placement^="left"] {
    margin-right: 5px;
  }

  .tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  .tooltip[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
