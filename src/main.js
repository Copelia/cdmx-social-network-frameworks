import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import firebase from 'firebase'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// global.$ = $

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
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

