import { defineClientConfig } from "@vuepress/client";
import Audio from "./components/Audio.vue";

export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.component("Audio", Audio);
  },
});