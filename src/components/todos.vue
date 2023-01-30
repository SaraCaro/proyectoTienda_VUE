<script setup>

</script>


<template>
    <div class="shop-container">
        <section id="products">
        <input id="typeForSort" type="hidden" value="${originalType}">
            <div class="products-text">
                <h1>Todos los productos</h1>
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
            </div>
        </section>
    </div>

</template>