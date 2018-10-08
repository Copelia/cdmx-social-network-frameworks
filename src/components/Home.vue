<template>
<div>
    <p>{{ msg }}</p>
    <button v-on:click="logout">Cierra Sesión</button>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Bienvenido/a a Garnachapp'
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style>
</style>
