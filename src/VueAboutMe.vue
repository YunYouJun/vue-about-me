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
        :href="copyright.link || 'https://sponsors.yunyoujun.cn'"
        :style="{ color: copyright.color }"
        target="_blank"
        class="logo"
      >
        <SocialIcon
          class="animate-logo"
          :type="copyright.icon || 'cloud'"
          :icon="copyright.icon || 'cloud'"
          :color="copyright.color || '#0078E7'"
        />
        <!-- <img :alt="copyright.logo" :src="copyright.logo" /> -->
      </a>
      <span>{{ copyright.author }}</span>
    </div>
    <div class="links">
      <a
        :ref="setItemRef"
        class="link-item tooltip"
        v-for="(link, index) in links"
        trigger="hover"
        :key="index"
        :style="`--vam-color: ${getLinkInfoByType(link.type).color}`"
        :href="link.href"
        target="_blank"
      >
        <span class="tooltip-text">{{ link.label }}</span>
        <SocialIcon :type="link.type" :icon="link.icon" :color="link.color" />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from "vue";
import type { PropType } from "vue";
import SocialIcon from "./components/SocialIcon.vue";

const linkRefs: any[] = [];
const setItemRef = (el: any) => {
  if (el) {
    linkRefs.push(el);
  }
};

export interface AboutLink {
  /**
   * 类型
   */
  type?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 颜色
   */
  color?: string;
  /**
   * 背景色
   */
  backgroundColor?: string;
  /**
   * 图标
   */
  icon?: string;
  /**
   * 提示内容
   */
  label: string;
  /**
   * 链接
   */
  href: string;
}

const socialList = [
  {
    type: "github",
    color: "black",
  },
  {
    type: "telegram",
    color: "#1da1f2",
  },
  {
    type: "weibo",
    color: "#DB2828",
  },
  {
    type: "twitter",
    color: "#1da1f2",
  },
  {
    type: "wechat",
    color: "#1AAD19",
  },
  {
    type: "blog",
    color: "#6435C9",
  },
  {
    type: "cloud",
    color: "#0078e7",
  },
];

/**
 * 根据类型获取对应链接的图标和颜色
 */
function getLinkInfoByType(type?: string) {
  const instance = socialList.find((item) => item.type === type);
  return {
    color: instance?.color || "#0078e7",
    icon: instance?.type || "cloud",
  };
}

const props = defineProps({
  copyright: {
    type: Object,
    default() {
      return {
        name: "Vue About Me",
        repo: "Vue-About-Me",
        author: "YunYouJun",
        icon: "cloud",
        link: "https://sponsors.yunyoujun.cn",
        color: "black",
      };
    },
  },
  links: {
    type: Array as PropType<AboutLink[]>,
    default() {
      return [
        {
          type: "github",
          label: `GitHub: YunYouJun`,
          href: `https://github.com/YunYouJun`,
        },
        {
          type: "telegram",
          label: "Telegram Channel",
          href: "https://t.me/elpsycn",
        },
        {
          type: "weibo",
          label: "微博：机智的云游君",
          href: "http://weibo.com/jizhideyunyoujun",
        },
        {
          type: "twitter",
          label: "Twitter: YunYouJun",
          href: "https://twitter.com/YunYouJun",
        },
        {
          type: "wechat",
          label: "微信公众号：云游君",
          href: "https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/about/white-qrcode-and-search.jpg",
        },
        {
          type: "blog",
          label: "博客：yunyoujun.cn",
          href: "http://www.yunyoujun.cn",
        },
      ];
    },
  },
});

const { links } = toRefs(props);

const copyright = Object.assign(
  {
    author: "YunYouJun",
    icon: "cloud",
    link: "https://sponsors.yunyoujun.cn",
    color: "#0078e7",
  },
  props.copyright
);
</script>

<style lang="scss">
#vue-about-me {
  text-align: center;
  padding: 0.8rem;

  .animate-logo {
    animation: iconAnimate 1.5s ease-in-out infinite;
  }

  a {
    color: #0078e7;
    text-decoration: none;
  }

  svg {
    display: inline-block;
  }

  .iconify {
    width: 1.2rem;
    height: 1.2rem;
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    padding: 5px;

    .logo {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      fill: currentColor;
      overflow: hidden;
      padding: 0 0.5rem;
      transition: 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .link-item {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    color: var(--vam-color, #000);
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border-radius: 50%;
    transition: 0.3s;
    margin: 0.4rem;

    width: 2rem;
    height: 2rem;

    &:hover {
      background-color: var(--vam-color, "transparent");
      transform: scale(1.2);
      color: #fff !important;
      text-shadow: 0px 0px 1px #000;
    }
  }

  // tooltip
  .tooltip {
    position: relative;
    display: inline-flex;

    .tooltip-text {
      visibility: hidden;
      font-size: 12px;
      width: 120px;
      background-color: rgba(55, 55, 55, 0.9);
      color: #fff;
      text-align: center;
      border-radius: 5px;
      padding: 5px;
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
