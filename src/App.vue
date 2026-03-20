<script setup>
import { ref } from 'vue'
import { NotificacionStore } from './stores/NotificationStore'
import { CarritoTienda } from './stores/CartStore'

const notificacionStore = NotificacionStore()
const carrito = CarritoTienda()
const premium = ref(true)
const url = 'https://vuejs.org/guide/quick-start.html'

const actualizarCarrito = (id) => {
  carrito.add(id)
}

const eliminarCarrito = (id) => {
  carrito.eliminar(id)
}
</script>

<template>
  <div class="nav-bar">
    <div class="nav-links">
      <router-link to="/" class="nav-link">Inicio</router-link>
      <router-link :to="{ name: 'TiendaCompleta' }" class="nav-link">Tienda</router-link>

      <a :href="url" class="nav-link">Guia de Vue</a>
    </div>

    <router-link
      :to="{ name: 'Carrito' }"
      class="cart"
      :class="{ 'cart-animation': carrito.isAnimating }"
    >
      Cart({{ carrito.total }})
    </router-link>
  </div>
  <div v-if="notificacionStore.mensaje" class="flash-message">
    {{ notificacionStore.mensaje }}
  </div>
  <router-view
    :premium="premium"
    @add-to-cart="actualizarCarrito"
    @delete-element="eliminarCarrito"
  />
</template>

<style scoped></style>
