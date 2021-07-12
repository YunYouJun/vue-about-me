<template>
  <div class="container">
    <div class="header">
      <base-header></base-header>
    </div>
    <div class="main">Main</div>
    <div class="footer">
      <vue-about-me :copyright="copyright" :is-dark="isDark"></vue-about-me>
    </div>
  </div>
</template>

<script lang="ts" >
import { isDark } from '~/logic'
import BaseHeader from "~/components/BaseHeader.vue"

// import VueAboutMe from "vue-about-me";
// import "vue-about-me/style.css";

// import VueAboutMe from "./VueAboutMe.vue";

// test real js
// @ts-ignore
import VueAboutMe from "../dist/vue-about-me.es.js";
import "../dist/style.css";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    BaseHeader,
    VueAboutMe,
  },  
  setup() {
    const copyright = {
      name: "Vue About Me",
      repo: "Vue-About-Me",
      author: "YunYouJun",
      // logo: 'https://cn.vuejs.org/images/logo.png',
      link: "https://sponsors.yunyoujun.cn",
    };

    return {
      copyright,
      isDark
    }
  }
})
</script>
