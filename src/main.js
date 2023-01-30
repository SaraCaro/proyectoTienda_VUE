import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import contenido from './components/contenido.vue'
import mujer from './components/mujer.vue'
import hombre from './components/hombre.vue'
import joyeria from './components/joyeria.vue'
import todos from './components/todos.vue'
import login from './components/login.vue'
import registro from './components/registro.vue'
import carrito from './components/carrito.vue'
import singleProduct from './components/singleProduct.vue'
import { VueFire, VueFireAuth } from 'vuefire'

import { firebaseApp } from './firebase.js'

// Estilos
import './assets/style.css'

const routes = [
    { 
        path: '/', 
        component: contenido,
    },
    { 
        path: '/mujer', 
        component: mujer 
    },
    {
        path: '/hombre',
        component: hombre
    },
    {
        path: '/joyeria',
        component: joyeria
    },
    {
        path: '/todos',
        component: todos
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/registro',
        component: registro
    },
    {
        path: '/carrito',
        component: carrito
    },
    {
        path: '/singleProduct/:id',
        component: singleProduct
    }

]

const app = createApp(App)
app
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

