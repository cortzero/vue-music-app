import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import routes from '@/routes'
import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'
import store from '@/store'

import eventBus from '@/plugins/event-bus'


// Use es para que Vue empiece a usar dependencias o plugins
/**
 * Se usa no solo para instalar plugins sino también para librerias de terceros
 */
Vue.use(eventBus);
Vue.use(VueRouter);
Vue.use(msToMm);
Vue.use(blur);

// Instancia del VueRouter para pasarsela a Vue y que instale las rutas y las genere
const router = new VueRouter({ 
  routes,  // VueRouter({ routes: routes }) Recibe un objeto con las rutas
  mode: 'history'  // Le decimos al router que vamos a usar el history mode nativo y no usar el # en la url
});

new Vue({
  el: '#app',
  render: h => h(App),
  router, // Es igual que router: router
  store
})
