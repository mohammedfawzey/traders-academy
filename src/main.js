import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// external css styles
import "@/assets/main.css";
Vue.config.productionTip = false;
// options
import myMixin from "@/utils/mixin";
Vue.mixin(myMixin);
//
import VueI18n from "vue-i18n";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";
Vue.use(VueI18n);
const messages = {
  en,
  ar,
};
// locale: "en",
// fallbackLocale: "ar",
const i18n = new VueI18n({
  locale: "ar",
  fallbackLocale: "en",
  messages,
});

//
router.beforeEach((to, from, next) => {
  // add lang if no lang localhost:8080/
  const lang = to.params.lang;
  if (!lang) {
    lang = "en";
  }
  i18n.locale = lang;
  Vue.prototype.$isEn = i18n.locale === "en";
  Vue.prototype.$ar = i18n.locale === "ar";
  next();
});
//
new Vue({
  router,
  i18n,
  store,
  vuetify,
  watch: {
    "$i18n.locale"(value) {
      if (value == "ar") {
        this.$vuetify.rtl = true;
      } else {
        this.$vuetify.rtl = false;
      }
    },
  },
  mounted() {
    if (this.$i18n.locale == "ar") {
      this.$vuetify.rtl = true;
    } else {
      this.$vuetify.rtl = false;
    }
  },
  render: (h) => h(App),
}).$mount("#app");
