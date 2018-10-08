<template>
  <div>
    <form @submit.prevent="login">
      <h2>Ingresa a tu cuenta</h2>
      <input type="email" v-model="email" placeholder="Ingresa tu correo">
      <input type="password" v-model="password" placeholder="Ingresa tu contraseña">
      <button>Adelante!</button>
      <p>No tienes cuenta? <router-link to="/signup">Regístrate</router-link></p>
          <v-btn color="info">Info</v-btn>

    </form>
    <!-- <pre>
      {{ $data }}
    </pre> -->
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => this.$router.replace('Home'), (error) => console.error(error))
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
