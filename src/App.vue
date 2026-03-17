<script setup>

import {ref} from 'vue'
import ProductDisplay from '@/components/ProductDisplay.vue';

const cart = ref([])
const premium = ref(true)
const url = ref('https://vuejs.org/guide/quick-start.html')
const isAnimating = ref(false)


const actualizarCarrito = (id) => {
  cart.value.push(id)
  isAnimating.value = true
  setTimeout(() => {
    isAnimating.value = false
  }, 300)
}

const eliminarCarrito = (id) =>{
  const index= cart.value.indexOf(id)
  if(index!==-1){
    cart.value.splice(index, 1)
    console.log("Producto eliminado correctamente",cart.value.length)
  }
}


</script>

<template>
  <div class="nav-bar">
        <div class="nav-links">
          <a href="#" class="nav-link"><i class="fas fa-home"></i>Inicio</a>
          <a href="#" class="nav-link"><i class="fas fa-store"></i>Tienda</a>
          <a :href="url" class="nav-link"><i class="fas fa-book"></i>Guia de Vue</a>
        </div>
      
      <div class="cart" :class="{'cart-animation':isAnimating}">
        <i class="fas fa-shopping-cart"></i> Cart({{cart.length}})
        </div>
      </div>
      <ProductDisplay
      :premium="premium"
      @add-to-cart="actualizarCarrito"
      @delete-element="eliminarCarrito"
      />

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
