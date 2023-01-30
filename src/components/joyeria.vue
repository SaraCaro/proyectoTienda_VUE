<script setup>
import { useFirestore,useCollection } from 'vuefire'
import { collection,addDoc,deleteDoc,doc } from 'firebase/firestore'

import  producto from './producto.vue'


const db = useFirestore(); 
const listaProducto = useCollection(collection(db, 'joyeria'));

</script>


<template>
    <div class="shop-container">
        <section id="products">
        <input id="typeForSort" type="hidden" value="${originalType}">
            <div class="products-text">
                <h1>Joyeria</h1>
            </div>
            <div class="sortProducts">
                <p>Ordenar por: </p>
                <select name="sort" id="sort">
                    <option value="">Selecciona una opción</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <button class="sort-button">Ordenar</button>
            </div>
            <div class="products-container">
                <producto v-for="prod in listaProducto" :producto="prod"></producto>
            </div>
        </section>
    </div>
</template>