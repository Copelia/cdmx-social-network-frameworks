import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import Home from '../components/Home.vue'

const routes = [
  {path: '/login', component: LogIn, name: 'login'},
  {path: '/signup', component: SignUp, name: 'signup'},
  {path: '/home', component: Home, name: 'home', meta: {requiresAuth: true}},
  {path: '*', redirect: '/login'},
  {path: '/', redirect: '/login'}
]

export default routes
