import { App } from "vue";
import VueAboutMe from "./VueAboutMe.vue";

VueAboutMe.install = (app: App): void => {
  app.component("VueAboutMe", VueAboutMe);
};

export default VueAboutMe;
