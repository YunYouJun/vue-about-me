<script lang="ts">
import { defineComponent } from 'vue';
import { isDark, toggleDark } from '~/logic'

export default defineComponent({
  setup() {
    return {
      isDark,
      toggleDark
    }
  }
})
</script>

<template>
  <a class="icon-btn" title="Toggle Dark" @click="toggleDark">
    <i-ri-moon-line v-if="isDark" />
    <i-ri-sun-line v-else />
  </a>
</template>
