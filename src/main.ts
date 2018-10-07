import Vue from "vue";
import Scythe from "./Scythe.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Scythe)
}).$mount("#app");
