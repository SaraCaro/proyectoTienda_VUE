<script setup>

import { ref } from "vue";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";

var usuario = ref("");
var nombre = ref("");
var email = ref("");
var contraseña = ref("");

function register() {
    createUserWithEmailAndPassword(auth, email.value, contraseña.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(userCredential.user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message);
        // ..
    });
}

</script>


<template>
    <div class="shop-container">
        <section id="register">
            <div class="register-text">
                <h1>Registrarse</h1>
            </div>
            <div class="register-container">
                <div id="register-form">
                    <div class="form-group">
                        <label for="username">Usuario</label>
                        <input type="text" name="username" id="username" v-model="usuario">
                    </div>
                    <div class="form-group">
                        <label for="name">Nombre</label>
                        <input type="text" name="name" id="name" v-model="nombre">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" name="password" id="password" v-model="contraseña">
                    </div>
                    <router-link to="/login"><p id="login-link">¿Ya tienes una cuenta? <span>Inicia sesión aqui</span></p></router-link>
                    <button class="register-button" @click="register">Registrarse</button>
                    <p id="signup-message">Te has registrado correctamente</p>
                </div>
            </div>
        </section>
        </div> 
</template>