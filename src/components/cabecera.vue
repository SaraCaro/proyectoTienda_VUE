<script setup>

</script>


<template>

<header>
    
            <router-link to="/">
                <img src="../assets/img/logo.png" alt="Logo" id="logo">
            </router-link>
            
            <nav>
                <div class="checkbton">
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                </div>
                <ul class="menu">
                    <li><router-link to="/mujer">Mujer</router-link></li>
                    <li><router-link to="/hombre">Hombre</router-link></li>
                    <li><router-link to="/joyeria">Joyerias</router-link></li>
                    <li><router-link to="/todos">Productos</router-link></li>
                </ul>
            </nav>
    
            <div class="carrito-login">
                <router-link to="/carrito">
                    <i class="fa-solid fa-shopping-cart"></i>
                </router-link>
                <router-link to="/login">
                    <i class="fa-solid fa-user"></i>
                </router-link>
            </div>
        </header>
</template>