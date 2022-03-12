import VueAboutMe from "./dist/vue-about-me.mjs";
export default VueAboutMe;

declare module "vue-about-me/sfc" {
  import { ComponentOptions } from "vue";
  export default ComponentOptions;
}
