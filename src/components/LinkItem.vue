<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import type { AboutLink } from '../VueAboutMe.vue'
import { computed, toRefs } from 'vue'
import SocialIcon from './SocialIcon.vue'

const props = defineProps<{
  link: Partial<AboutLink>
  isDark: boolean
}>()

const { link, isDark } = toRefs(props)

const socialList = [
  {
    type: 'github',
    color: 'black',
  },
  {
    type: 'telegram',
    color: '#1da1f2',
  },
  {
    type: 'weibo',
    color: '#DB2828',
  },
  {
    type: 'twitter',
    color: '#1da1f2',
  },
  {
    type: 'wechat',
    color: '#1AAD19',
  },
  {
    type: 'blog',
    color: '#6435C9',
  },
  {
    type: 'cloud',
    color: '#0078e7',
  },
  {
    type: 'bilibili',
    color: '#fb7299',
  },
]

const styles = computed(() => {
  const instance = socialList.find(item => item.type === link.value.type)

  // '--vam-color': string
  // '--vam-hover-color'?: string
  // '--vam-icon-size'?: string
  const defaultStyle: Record<string, string> = {
    '--vam-color': instance?.color || '#0078e7',
  }

  if (socialList.length > 6) {
    defaultStyle['--vam-icon-size'] = '1.6rem'
  }

  if (
    instance
    && ['black', '#000', '#000000', 'rgb(0,0,0)'].includes(instance.color)
    && isDark.value
  ) {
    defaultStyle['--vam-color'] = 'white'
    defaultStyle['--vam-hover-color'] = 'black'
  }
  return defaultStyle as CSSProperties
})
</script>

<template>
  <a
    class="link-item tooltip"
    trigger="hover"
    :style="styles"
    :href="link.href"
    :target="link.target || '_blank'"
  >
    <span class="tooltip-text">{{ link.label }}</span>
    <SocialIcon :type="link.type" :icon="link.icon" :color="link.color" />
  </a>
</template>
