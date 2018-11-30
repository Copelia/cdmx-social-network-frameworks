<template>
  <div class="container">
    <div class="row">
      <div class="col- text-center">
        <form @submit.prevent="login">
          <h2>Ingresa a tu cuenta</h2>
          <input type="email" v-model="email" placeholder="Tu correo">
          <input type="password" v-model="password" placeholder="Tu contraseña">
          <!-- <div class="row"> -->
          <div class="col-12 text-center">
          <button class="btn btn-success">Inicia sesión</button>
          </div>
          <!-- </div> -->
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
  background-repeat: no-repeat;
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
