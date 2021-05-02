import { App } from "vue";
import VueAboutMe from "./VueAboutMe.vue";

VueAboutMe.install = (app: App): void => {
  app.component(VueAboutMe.name, VueAboutMe);
};

export default VueAboutMe;
