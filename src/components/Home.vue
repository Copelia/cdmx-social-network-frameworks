<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Talleres de Bicicletas</span>
      <span class="navbar-text">¡Comparte y encuentra los talleres mecánicos para tu bici!</span>
    </nav>
    <input type="text" v-model="workshop" @keyup.enter="addWorkshop">
    <ul>
      <li v-for="(workshopName, key) in workshops" :key="key">
        {{workshopName.name}}
        <button class="btn btn-xs btn-info">Edit</button>
        <button class="btn btn-xs btn-danger" @click="deleteWorkshop(key)">Delete</button>
        <input
          type="text"
          v-model="editing[key]"
          @keyup.enter="editWorkshop(key)"
          class="form-control"
        >
      </li>
    </ul>
    <button class="btn btn-secondary" v-on:click="logout">Cierra Sesión</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Home",
  data() {
    return {
      workshop: null,
      workshops: [],
      editing: []
    };
  },
  methods: {
    addWorkshop() {
      // this.workshops.push(this.workshop)
      firebase
        .database()
        .ref("workshops")
        .push({ name: this.workshop })
        .then(data => [console.log(data)])
        .catch(error => [console.log(error)]);
    },
    editWorkshop(key) {
      firebase
        .database()
        .ref("workshops/" + key)
        .set({
          name: this.editing[key]
        });
      this.editing = [];
    },
    deleteWorkshop(key) {
      firebase
        .database()
        .ref("workshops/" + key)
        .remove();
    },

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  },
  created () {
    firebase.database().ref('workshops').on('value', (snapshot) => {
      this.workshops = snapshot.val()
    })
  }
};
</script>

<style>
</style>
