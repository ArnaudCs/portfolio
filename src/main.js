//import * as Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHistory } from 'vue-router';
import MoreProject from './components/MoreProjects.vue'

loadFonts()

const routes = [
  { path: '/projects', component: MoreProject },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')

