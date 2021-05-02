<template>
  <div id="vue-about-me">
    <div class="copyright">
      <template v-if="copyright.author && copyright.repo">
        <a
          :href="`https://github.com/${copyright.author}/${copyright.repo}`"
          target="_blank"
        >
          {{ copyright.name ? copyright.name : copyright.repo }}
        </a>
      </template>
      <a
        :href="copyright.link"
        :style="{ color: copyright.color }"
        target="_blank"
      >
        <template v-if="copyright.logo.indexOf('#icon-') !== -1">
          <svg class="logo animate-logo" aria-hidden="true">
            <use :xlink:href="copyright.logo"></use>
          </svg>
        </template>
        <template v-else>
          <img class="logo" :alt="copyright.logo" :src="copyright.logo" />
        </template>
      </a>
      <span>{{ copyright.author }}</span>
    </div>
    <div class="link">
      <a
        ref="link"
        class="link-item tooltip"
        v-for="(link, index) in links"
        trigger="hover"
        :key="index"
        :style="`--vam-color: ${link.color}`"
        :href="link.href"
        target="_blank"
      >
        <span class="tooltip-text">{{ link.label }}</span>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="link.icon"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

interface AboutLink {
  /**
   * 名称
   */
  name: string;
  /**
   * 颜色
   */
  color: string;
  /**
   * 背景色
   */
  backgroundColor: string;
  /**
   * 图标
   */
  icon: string;
  /**
   * 提示内容
   */
  label: string;
  /**
   * 链接
   */
  href: string;
}

export default defineComponent({
  name: "VueAboutMe",
  props: {
    copyright: {
      type: Object,
      default() {
        return {
          name: "Vue About Me",
          repo: "Vue-About-Me",
          author: "YunYouJun",
          logo: "#icon-cloud-line",
          link: "https://www.yunyoujun.cn",
          color: "#0078e7",
        };
      },
    },
    links: {
      type: Array as PropType<AboutLink[]>,
      default() {
        return [
          {
            name: "github",
            color: "black",
            icon: "#icon-github-line",
            label: `GitHub: YunYouJun`,
            href: `https://github.com/YunYouJun`,
          },
          {
            name: "telegram",
            color: "#1da1f2",
            icon: "#icon-telegram-line",
            label: "Telegram Channel",
            href: "https://t.me/elpsycn",
          },
          {
            name: "weibo",
            color: "#DB2828",
            icon: "#icon-weibo-line",
            label: "微博：机智的云游君",
            href: "http://weibo.com/jizhideyunyoujun",
          },
          {
            name: "twitter",
            color: "#1da1f2",
            icon: "#icon-twitter-line",
            label: "Twitter: YunYouJun",
            href: "https://twitter.com/YunYouJun",
          },
          // {
          //   name: "email",
          //   color: "#409EFF",
          //   icon: "#icon-mail-line",
          //   label: "E-mail：me@yunyoujun.cn",
          //   href: "mailto:me@yunyoujun.cn",
          // },
          {
            name: "blog",
            color: "#6435C9",
            icon: "#icon-global-line",
            label: "博客：yunyoujun.cn",
            href: "http://www.yunyoujun.cn",
          },
        ];
      },
    },
  },
});
</script>

<style lang="scss">
#vue-about-me {
  text-align: center;
  padding: 10px;

  .animate-logo {
    animation: iconAnimate 1.5s ease-in-out infinite;
  }

  a {
    color: #0078e7;
    text-decoration: none;
  }

  .copyright {
    font-size: 0.9rem;
    padding: 5px;

    .logo {
      width: 1.2rem;
      height: 1.2rem;
      vertical-align: -0.3em;
      fill: currentColor;
      overflow: hidden;
      padding: 0 0.5rem;
      transition: 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .link-item {
    display: inline-block;
    font-size: 1em;
    color: var(--vam-color, #000);
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border-radius: 50%;
    transition: 0.3s;
    align-content: center;
    line-height: 2em;
    margin: 5px;

    width: 2em;

    &:hover {
      background-color: var(--vam-color, "transparent");
      transform: scale(1.2);
      color: #fff !important;
      text-shadow: 0px 0px 1px #000;
    }

    .icon {
      width: 1.2em;
      height: 1.2em;
      vertical-align: -0.25em;
      fill: currentColor;
      overflow: hidden;
    }
  }

  // tooltip
  .tooltip {
    position: relative;
    display: inline-block;

    .tooltip-text {
      visibility: hidden;
      font-size: 12px;
      width: 120px;
      background-color: rgba(55, 55, 55, 0.9);
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 0 5px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      margin-left: -65px;
      opacity: 0;
      transition: opacity 0.2s;

      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
      }
    }

    &:hover {
      .tooltip-text {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}

@keyframes iconAnimate {
  0%,
  100% {
    transform: scale(1);
  }

  10%,
  30% {
    transform: scale(0.9);
  }

  20%,
  40%,
  60%,
  80% {
    transform: scale(1.1);
  }

  50%,
  70% {
    transform: scale(1.1);
  }
}
</style>
