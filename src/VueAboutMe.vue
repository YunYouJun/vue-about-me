<script setup lang="ts">
import { toRefs } from 'vue'
import LinkItem from './components/LinkItem.vue'

export interface AboutLink {
  /**
   * 类型
   */
  type?: string
  /**
   * 名称
   */
  name?: string
  /**
   * 颜色
   */
  color?: string
  /**
   * 背景色
   */
  backgroundColor?: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 提示内容
   */
  label?: string
  /**
   * 链接
   */
  href?: string
  /**
   * 是否为暗色
   */
  isDark?: boolean
  /**
   * @default '_blank'
   */
  target?: string
}

// interface VamProps

const props = withDefaults(defineProps<{
  /**
   * 是否为暗色模式
   */
  isDark?: boolean
  copyright?: Partial<{
    name: string
    repo: string
    author: string
    authorUrl: string
    icon: string
    iconUrl: string
    link: string
    color: string
  }>
  links?: Partial<AboutLink>[]
}>(), {
  isDark: false,
  copyright: () => ({
    name: 'Vue About Me',
    repo: 'YunYouJun/vue-about-me',
    author: 'YunYouJun',
    authorUrl: 'https://www.yunyoujun.cn',
    icon: 'cloud',
    iconUrl: 'https://sponsors.yunyoujun.cn',
    link: 'https://sponsors.yunyoujun.cn',
    color: 'black',
  }),
  links: () => [
    {
      type: 'github',
      label: `GitHub: YunYouJun`,
      href: `https://github.com/YunYouJun`,
    },
    {
      type: 'telegram',
      label: 'Telegram Channel',
      href: 'https://t.me/elpsycn',
    },
    {
      type: 'weibo',
      label: '微博：机智的云游君',
      href: 'http://weibo.com/jizhideyunyoujun',
    },
    {
      type: 'twitter',
      label: 'Twitter: YunYouJun',
      href: 'https://twitter.com/YunYouJun',
    },
    {
      type: 'wechat',
      label: '微信公众号：云游君',
      href: 'https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/about/white-qrcode-and-search.jpg',
    },
    {
      type: 'bilibili',
      label: '云游君Official',
      href: 'https://space.bilibili.com/1579790',
    },
    {
      type: 'blog',
      label: '博客：yunyoujun.cn',
      href: 'http://www.yunyoujun.cn',
    },
  ],
})

const { links, isDark } = toRefs(props)

const copyright = Object.assign(
  {
    author: 'YunYouJun',
    icon: 'cloud',
    iconUrl: 'https://sponsors.yunyoujun.cn',
    color: '#0078e7',
  },
  props.copyright,
)
</script>

<template>
  <div id="vue-about-me">
    <div class="copyright">
      <template v-if="copyright.repo">
        <a
          :href="`https://github.com/${copyright.repo}`"
          target="_blank"
          class="repo-link"
        >
          {{ copyright.name ? copyright.name : copyright.repo }}
        </a>
      </template>
      <a
        :href="copyright.iconUrl || 'https://sponsors.yunyoujun.cn'"
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
      <a v-if="copyright.authorUrl" class="author-link" :href="copyright.authorUrl" target="_blank">
        {{ copyright.author }}
      </a>
      <span v-else>{{ copyright.author }}</span>
    </div>
    <div class="links">
      <LinkItem
        v-for="(link, index) in links"
        :key="index"
        :link="link"
        :is-dark="isDark"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/vue-about-me.scss';
</style>
