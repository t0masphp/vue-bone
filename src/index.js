import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import '../assets/app.scss'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
