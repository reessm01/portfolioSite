import "./custom.scss"
import Vue from "vue"
import App from "./App.vue"
import BootstrapVue from "bootstrap-vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faPaperPlane, faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import vueScrollto from "vue-scrollto"

library.add(
  faPhone,
  faPaperPlane,
  faTwitter,
  faGithub,
  faLinkedin,
  faIdCard
  )
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


Vue.use(vueScrollto)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount("#app")
