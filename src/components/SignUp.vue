<template>
  <div class="container">
    <div class="row">
      <div class="col-">
        <form>
          <h2>Registra una cuenta</h2>
          <input type="email" v-model="email" placeholder="Ingresa tu correo">
          <input type="password" v-model="password" placeholder="Ingresa una contraseña">
          <button type="button" class="btn btn-dark" @click="signUp" color="warning">Regístrame!</button>
          <p>Ya tienes una cuenta? <router-link to="/login">Inicia sesión</router-link></p>
        </form>
      </div>
    </div>
  </div>  
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => this.$router.replace('LogIn'), (error) => console.error(error))
    },
    returnLogin () {
      this.$router.replace('login')
    }
  }
}
</script>

<style scoped>
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  form > * {
    display: block;
  }
</style>
