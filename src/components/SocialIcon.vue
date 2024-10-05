<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  type: String,
  icon: String,
  color: String,
})

const styles = computed(() => {
  return {
    '--vam-color': props.color,
  }
})
</script>

<template>
  <i-ri-github-line v-if="props.type === 'github'" :style="styles" />
  <i-ri-telegram-line v-else-if="props.type === 'telegram'" :style="styles" />
  <i-ri-weibo-line v-else-if="props.type === 'weibo'" :style="styles" />
  <i-ri-wechat-2-line v-else-if="props.type === 'wechat'" :style="styles" />
  <i-ri-twitter-line v-else-if="props.type === 'twitter'" :style="styles" />
  <i-ri-global-line v-else-if="props.type === 'blog'" :style="styles" />
  <i-ri-cloud-line v-else-if="props.type === 'cloud'" :style="styles" />
  <i-ri-bilibili-line v-else-if="props.type === 'bilibili'" :style="styles" />
  <span v-else class="iconify" :data-icon="props.icon" />
</template>
