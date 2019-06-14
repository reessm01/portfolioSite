import "./custom.scss"
import Vue from "vue"
import App from "./App.vue"
import BootstrapVue from "bootstrap-vue"

import vueScrollto from "vue-scrollto"

Vue.use(vueScrollto)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount("#app")
