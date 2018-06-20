<template>
  <div id="vue-about-me">
    <div class="copyright">
      {{ copyright.name?copyright.name:copyright.repoName }}
      <a :href="copyright.link" :style="{color: copyright.color}">
        <svg class="logo" aria-hidden="true">
            <use :xlink:href="copyright.logo"></use>
        </svg>
      </a>
      {{ copyright.author }}
    </div>
    <div class="link">
      <a class="link-item" ref="link"
      v-for="(link, index) in links" 
      :key="index"
      v-tooltip.top-center="link.label"
      :style="{color: link.color, borderColor: link.color, backgroundColor: link.backgroundColor}"
      :href="link.href" target="_blank"
      @mouseover="hoverStyle(index, link.color)"
      @mouseout="resetStyle(index)">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="link.icon"></use>
        </svg>
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
          logo: '#icon-cloud',
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
            icon: '#icon-github',
            label: 'GitHub 项目代码',
            href: 'https://github.com/' + this.copyright.author + '/' + this.copyright.repoName
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
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#vue-about-me {
  text-align: center;
  padding: 10px;
  .copyright {
    font-size: 1rem;
    padding-bottom: 10px;
    .logo {
      width: 1.5em;
      height: 1.5em;
      vertical-align: -0.3em;
      fill: currentColor;
      overflow: hidden;

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

<style lang="scss">
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 10px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
}
</style>
