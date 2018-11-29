<template>
<v-app>
  <v-toolbar>
    <v-toolbar-title>Bike Workshops Network</v-toolbar-title>
  
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn flat>
    <v-icon>
sentiment_satisfied_alt
   </v-icon>
    </v-btn>
  </v-toolbar-items>
    </v-toolbar>
    <p class="lead">¡Comparte y encuentra los talleres mecánicos rifados en la CDMX!</p>
    <p>{{ msg }}</p>
    <button v-on:click="logout">Cierra Sesión</button>
    <!-- <v-btn v-on:click="logout" color="error">Cierra Sesión</v-btn> -->

</v-app>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Bienvenido/a!'
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
