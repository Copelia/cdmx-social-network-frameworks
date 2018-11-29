<template>
  <div class="container">
    <div class="row">
      <div class="col-">
        <form @submit.prevent="login">
          <h3>Ingresa a tu cuenta</h3>
          <input type="email" v-model="email" placeholder="Tu correo">
          <input type="password" v-model="password" placeholder="Tu contraseña">
          <button class="btn btn-warning">Adelante!</button>
          <p>No tienes cuenta? <router-link to="/signup">Regístrate</router-link></p>
        </form>
      </div>
    </div>
</div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => this.$router.replace("Home"),
          error => console.error(error)
        );
    }
  }
};
</script>

<style scoped>
.container {
  background-image: url('../assets/bicycle.png');
  background-position: initial;
  height: 100vh;
}
div {
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

button{
  align-items: flex-end
}


</style>
