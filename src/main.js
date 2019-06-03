import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
// css reset
import "normalize.css";
// global css
import "@/styles/index.scss";
// global font
import "@/assets/plateform-font/iconfont.css";
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
