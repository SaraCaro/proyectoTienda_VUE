<script setup>

import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

var usuario = ref("");
var password = ref("");

function login(){
    signInWithEmailAndPassword(auth, usuario, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential.user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message)
  });
}

function cerrarSesion(){
    signOut(auth).then(() => {
        console.log('Sesion cerrada');
      }).catch((error) => {
        console.log(error);
      });
}


</script>


<template>
    <div class="shop-container">
        <section id="login">
            <div class="login-text">
                <h1>Iniciar sesión</h1>
            </div>
            <div class="login-container">
                <form action="" id="login-form">
                    <div class="form-group">
                        <label for="username">Usuario</label>
                        <input type="text" name="username" id="username" v-model="usuario">
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" name="password" id="password" v-model="password">
                    </div>
                    <router-link to="/registro"><p id="registro-link">¿No tienes una cuenta? <span>Registrate aqui</span></p></router-link>
                    <button class="login-button" @click="login">Iniciar sesión</button>
                    <button @click="cerrarSesion">Cerrar Sesion</button>
                </form>
            </div>
        </section>
    </div>

</template>