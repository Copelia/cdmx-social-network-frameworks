<template>
  <div class="container">
    <div class="row">
      <div class="col- text-center">
        <form>
          <h2>Registra una cuenta</h2>
          <input type="email" v-model="email" placeholder="Tu correo">
          <input type="password" v-model="password" placeholder="Tu contraseña">
          <div class="col-12 text-center">
          <button type="button" class="btn btn-warning" @click="signUp" color="warning">Registrarme</button>
          </div>
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
.container {
  background-image: url('../assets/bicycle.png');
  background-position: initial;
  height: 100vh;
}
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  form > * {
    display: block;
  }

  input{
  border: 1px rgba(73, 226, 193, 0.4);  
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
