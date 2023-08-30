import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  allowComposition: true, // you need to specify that!
  messages: {
    en: {
      hello: "hello!",
    },
    ja: {
      hello: "こんにちは！",
    },
  },
});

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(store).use(router).use(vuetify).use(i18n).mount("#app");
