<script setup>
import { ref, onMounted } from 'vue'
import TiendaService from '../services/TiendaService'
import ProductoInfo from './ProductoInfo.vue'

const productos = ref([])
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
  <div class="tienda-gigante">
    <h1 class="titulo-catalogo">Productos Actualmente</h1>
    <div v-if="productos.length > 0">
      <div v-for="producto in productos" :key="producto.id" class="producto-fila">
        <ProductoInfo :calcetin="producto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tienda-gigante {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.titulo-catalogo {
  text-align: center;
  font-size: 40px;
  color: #39495c;
  margin-bottom: 50px;
  border-bottom: 3px solid #16c0b0;
  padding-bottom: 10px;
}

/* Esta clase separa cada producto con una línea para que no se peguen */
.producto-fila {
  margin-bottom: 80px;
  padding-bottom: 40px;
  border-bottom: 2px dashed #ccc;
}

.cargando {
  text-align: center;
  margin-top: 50px;
  color: #666;
}
</style>
