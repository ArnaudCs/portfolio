//import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueSmoothScroll from 'vue3-smooth-scroll'
//import VueGtag from 'vue-gtag';

loadFonts()

/* Vue.use(VueGtag, {
  config: { id: "G-5NTELR7JVE"}
}); */


createApp(App)
  .use(vuetify)
  .use(VueSmoothScroll)
  .mount('#app')

