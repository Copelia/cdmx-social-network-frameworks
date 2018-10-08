<template>
    <div>
      <form @submit.prevent="signUp">
        <h2>Registrarme</h2>
        <input type="email" v-model="email" placeholder="Ingresa tu correo">
        <input type="password" v-model="password" placeholder="Ingresa una contraseña">
        <button>Regístrame!</button>
    </form>
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
