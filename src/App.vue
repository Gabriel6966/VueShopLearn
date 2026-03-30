<script setup lang="ts">
import { NotificacionStore } from './stores/NotificationStore'
import { CarritoTienda } from './stores/CartStore'
import { datos } from './stores/Usuario'
import { fondo } from './stores/FondoStore'

const notificacionStore = NotificacionStore()
const carrito = CarritoTienda()
const usuario = datos()
const tema = fondo()

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
      <button class="tema" @click="tema.cambiar">
        {{ tema.oscuro ? 'Modo claro' : 'Modo oscuro' }}
      </button>
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
  <router-view v-slot="{ Component }">
    <Transition name="pagina" mode="out-in">
      <component :is="Component" :premium="usuario.premium" />
    </Transition>
  </router-view>
</template>

<style scoped>
/*Precaucion para que no pete*/
.nav-link {
  color: white !important;
}
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
  color: var(--color-texto-oscuro);
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

.pagina-enter-active,
.pagina-leave-active {
  transition: all 0.3s ease;
}

.pagina-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.pagina-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.tema {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid white;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition:
    transform 0.2s ease,
    background-color 0.2s;
}

.tema:hover {
  background-color: rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
}
</style>
