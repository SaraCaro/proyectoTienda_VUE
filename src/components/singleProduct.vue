<script setup>

import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();
const id = route.params.id;

function addProductToCart(id) {
    const cart = localStorage.getItem("cart");
    if (cart) {
        const cartObj = JSON.parse(cart);
        if (cartObj[id]) {
            cartObj[id] = cartObj[id] + 1;
        } else {
            cartObj[id] = 1;
        }
        localStorage.setItem("cart", JSON.stringify(cartObj));
    } else {
        const cartObj = {};
        cartObj[id] = 1;
        localStorage.setItem("cart", JSON.stringify(cartObj));
    }
}


</script>


<template>

        <div class="shop-container">
            <section id="singleProduct">
                <div class="singleProduct-container">
                    <div class="singleProduct-img">
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="singleProduct-text">
                        <input type="hidden" value="${product.id}" id="input-producto">
                        <h1>${product.title}</h1>
                        <p>${product.description}</p>
                        <p class="price">$${
                            product.price
                        }</p>
                        <div class="tallaje">
                        <label for="talla">Talla:</label>
                        <select name="talla" id="talla">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                        </div>
                        <button class="add-button" data-id="${product.id}" @click="addProductToCart">Agregar al carrito</button>
                    </div>
                </div>
            </section>
        </div>

</template>