// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Menu, MenuItem, Submenu, RadioButton, RadioGroup, Col, Row} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Col)
Vue.use(Row)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
