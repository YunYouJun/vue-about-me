<template>
  <div id="app">
    <div class="header">Header</div>
    <div class="main">Main</div>
    <div class="footer">
      <vue-about-me :copyright="copyright"></vue-about-me>
      <!-- <vue-about-me :copyright="copyright" :links="links"></vue-about-me> -->
    </div>
  </div>
</template>

<script>
import VueAboutMe from "../src/App.vue";
// import '../dist/VueAboutMe.umd.js'

export default {
  name: "example",
  data() {
    return {
      copyright: {
        name: "Vue About Me",
        repo: "Vue-About-Me",
        author: "YunYouJun",
        logo: "#icon-cloud-line",
        // logo: 'https://cn.vuejs.org/images/logo.png',
        link: "https://yunyoujun.github.io/vue-about-me/",
        color: "#0078E7",
      },
      // links: []
    };
  },
  components: {
    VueAboutMe,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

.footer {
  text-align: center;
  background-color: rgb(209, 232, 255);
}

.header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 444px;
}
</style>
