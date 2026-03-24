<script setup lang="ts">
import { CarritoTienda } from '../stores/CartStore'

const carritoStore = CarritoTienda()
</script>

<template>
  <div class="carrito-container">
    <h1 class="carrito-titulo">Tu Carrito</h1>

    <div v-if="carritoStore.total === 0" class="carrito-vacio">
      <p>Tu carro esta sin compras</p>
      <router-link :to="{ name: 'TiendaCompleta' }" class="button-start">
        Ir a la Tienda
      </router-link>
    </div>

    <div v-else>
      <div v-for="(item, index) in carritoStore.items" :key="index" class="carrito-item">
        <img :src="item.image" :alt="item.nombre" class="carrito-imagen" />
        <div class="carrito-info">
          <h2>{{ item.nombre }}</h2>
          <p>Color:{{ item.color }}</p>
          <p class="carrito-precio">{{ item.price }}€</p>
        </div>
        <button class="btn-eliminar" @click="carritoStore.eliminar(item.id)">X</button>
      </div>
      <div class="carrito-footer">
        <p class="total-precio">Total: {{ carritoStore.precioTotal }}€</p>
        <button class="button" @click="carritoStore.vacio()">Vaciar carro</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.carrito-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
}
.carrito-titulo {
  font-size: 40px;
  color: #39495c;
  border-bottom: 3px solid #16c0b0;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.carrito-vacio {
  text-align: center;
  margin-top: 80px;
  font-size: 22px;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.carrito-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  margin-bottom: 15px;
}

.carrito-imagen {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 5px;
}

.carrito-info {
  flex: 1;
}
.carrito-info h2 {
  font-size: 18px;
  color: #39495c;
  margin: 0 0 5px;
}
.carrito-info p {
  margin: 3px 0;
  color: #666;
}
.carrito-precio {
  font-weight: bold;
  color: #16c0b0 !important;
  font-size: 18px;
}

.btn-eliminar {
  background: none;
  border: 2px solid #ddd;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 16px;
  color: #999;
  transition: all 0.2s ease;
}

.btn-eliminar:hover {
  border-color: #ff4a4a;
  color: #ff4a4a;
}

.carrito-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #eee;
}
.total-precio {
  font-size: 26px;
  font-weight: bold;
  color: #39495c;
}

.button-start {
  background-color: #16c0b0;
  color: white;
  padding: 12px 30px;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.button-start:hover {
  background-color: #12998d;
}
</style>
