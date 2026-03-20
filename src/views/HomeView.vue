<script setup>
import { ref, onMounted } from 'vue'
import TiendaService from '../services/TiendaService'

const productos = ref(null)

onMounted(() => {
  TiendaService.getCalcetines()
    .then((response) => {
      productos.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="home-container">
    <h1>Hola a VueShopLearn soy Gabi</h1>
    <p>Una de las mejores tiendas que se ha creado con Vue</p>
    <div class="productos-grid" v-if="productos">
      <div v-for="producto in productos" :key="producto.id" class="producto-card">
        <img :src="producto.variantes[0].image" :alt="producto.product" class="card-image" />
        <h2>{{ producto.brand }} {{ producto.product }}</h2>
        <p class="price">{{ producto.price }}€</p>

        <router-link
          v-if="producto.id"
          :to="{ name: 'ProductoLayout', params: { id: producto.id } }"
          class="button-start"
        >
          Ver mas detalles
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 50px;
  padding: 0 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 48px;
  color: #39495c;
  margin-bottom: 10px;
}

p {
  font-size: 20px;
  color: #666;
  margin-bottom: 50px;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 60px;
}

.producto-card {
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.producto-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  border-color: #16c0b0;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 20px;
}

.producto-card h2 {
  font-size: 22px;
  color: #39495c;
  margin: 10px 0;
}

.price {
  font-size: 26px;
  font-weight: bold;
  color: #16c0b0;
  margin-bottom: 20px;
}

.button-start {
  background-color: #16c0b0;
  color: white;
  padding: 12px 0;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s ease;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}

.button-start:hover {
  background-color: #12998d;
}
</style>
