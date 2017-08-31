// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// Importing the different components
import Home from './components/Home'
import About from './components/About'

Vue.use(VueRouter)
Vue.use(VueMaterial)

const routes = [
  // Defining the routes for the application
  {path: '/', component: Home},
  {path: '/about', component: About},
]

Vue.config.productionTip = false

/* eslint-disable no-new */

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
}).$mount('#app')
