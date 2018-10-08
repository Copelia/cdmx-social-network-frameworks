import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'
// import firebase from 'firebase'

const routes = [
  {path: '/login', component: LogIn, name: 'login'},
  {path: '/signup', component: SignUp, name: 'signup'},
  {path: '/home', component: Home, name: 'home', meta: {requiresAuth: true}},
  {path: '*', redirect: '/login'},
  {path: '/', redirect: '/login'}
]

// routes.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('home')
//   else next()
// })

export default routes
