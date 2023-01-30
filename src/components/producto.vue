<script setup>


defineProps (['producto']);

</script>


<template>

        <div class="product">
            <router-link to="/singleProduct/param:id">
                <input type="hidden" value="${product.id}" id="input-producto">
                <img :src="producto.imagen" alt="" class="link-imagen">
                <div class="product-text">
                    <h3 class="link-titulo">{{ producto.titulo }}</h3>
                    <p class="price">{{ producto.precio }}</p>
                </div>
            </router-link>
        </div>

</template>