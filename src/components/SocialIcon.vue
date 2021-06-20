<template>
  <i-ri-github-line v-if="props.type === 'github'" :style="styles" />
  <i-ri-telegram-line v-else-if="props.type === 'telegram'" :style="styles" />
  <i-ri-weibo-line v-else-if="props.type === 'weibo'" :style="styles" />
  <i-ri-wechat-2-line v-else-if="props.type === 'wechat'" :style="styles" />
  <i-ri-twitter-line v-else-if="props.type === 'twitter'" :style="styles" />
  <i-ri-global-line v-else-if="props.type === 'blog'" :style="styles" />
  <i-ri-cloud-line v-else-if="props.type === 'cloud'" :style="styles" />
  <span v-else class="iconify" :data-icon="props.icon"></span>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
const props = defineProps({
  type: String,
  icon: String,
  color: String,
});

const styles = computed(() => {
  return {
    "--vam-color": props.color,
  };
});
</script>
