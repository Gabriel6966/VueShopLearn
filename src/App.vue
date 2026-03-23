<script setup lang="ts">
import { NotificacionStore } from './stores/NotificationStore'
import { CarritoTienda } from './stores/CartStore'
import { Usuario } from './stores/Usuario'

const notificacionStore = NotificacionStore()
const carrito = CarritoTienda()
const usuario = Usuario()

const url = 'https://vuejs.org/guide/quick-start.html'
</script>

<template>
  <div class="nav-bar">
    <div class="nav-links">
      <router-link to="/" class="nav-link">Inicio</router-link>
      <router-link :to="{ name: 'TiendaCompleta' }" class="nav-link">Tienda</router-link>

      <a :href="url" class="nav-link">Guia de Vue</a>
    </div>
    <div class="nav-right">
      <div v-if="usuario.logueado" class="user-info">
        <span>{{ usuario.nombre }}</span>
        <span v-if="usuario.premium" class="premium-badge">Premium</span>
        <button class="btn-logout" @click="usuario.salida()">Cerrar sesion</button>
      </div>
      <router-link v-else :to="{ name: 'Login' }" class="nav-link">Iniciar sesion</router-link>
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
  <router-view :premium="usuario.premium" />
</template>

<style scoped>
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-weight: bold;
}

.premium-badge {
  background: gold;
  color: #39495c;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 13px;
}

.btn-logout {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s ease;
}

.btn-logout:hover {
  background: rgba(255, 255, 255, 0.4);
}
</style>
