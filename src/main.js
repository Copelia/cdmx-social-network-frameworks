import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import firebase from 'firebase'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({ // eslint-disable-line no-new
  router,
  el: '#app',
  render: h => h(App)
})

const config = {
  apiKey: 'AIzaSyDjeoK99sQAUedhJS3azEub8XLU3dRwt0U',
  authDomain: 'social-network-vue.firebaseapp.com',
  databaseURL: 'https://social-network-vue.firebaseio.com',
  projectId: 'social-network-vue',
  storageBucket: 'social-network-vue.appspot.com',
  messagingSenderId: '110494542483'
}
firebase.initializeApp(config)

