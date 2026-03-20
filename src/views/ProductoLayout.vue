<script setup>
import { ref, onMounted } from 'vue'
import TiendaService from '../services/TiendaService.js'
import { useRouter } from 'vue-router'

//Cogemos el id del url mediante al router
const props = defineProps({
  id: {
    required: true,
  },
})

const calcetin = ref(null)
const router = useRouter()

// Cuando se muestre la pagina lo que hacemos es pedirle los calcetines a la API
onMounted(() => {
  TiendaService.getCalcetines(props.id)
    .then((response) => {
      //Manejamos mediante un array u objeto ya que json puedes devolver esos tipos de datos usando un operador ternario
      calcetin.value = Array.isArray(response.data) ? response.data[0] : response.data

      //En caso de que no hay id ponemos el error
      if (!calcetin.value) {
        router.push({ name: '404Resource', params: { resource: 'calcetín' } })
      }
    })
    .catch((error) => {
      //Manejo de errores mediante push ya que con console.log seria la parte fea del error,asi con el push le mandamos a la pagina de error que creamos
      if (error.response && error.response.status == 404) {
        router.push({ name: '404Resource', params: { resource: 'calcetín' } })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })
})
</script>

<template>
  <div v-if="calcetin" class="layout-container">
    <div class="nav-producto">
      <router-link :to="{ name: 'ProductoInfo' }">Detalles del Producto</router-link>
      <router-link :to="{ name: 'ProductoResenas' }">Opiniones</router-link>
    </div>
    <!--Ahora ya no hace falta pasarle los @add-to-cart ya que pinia gestionara los movimientos-->
    <router-view :calcetin="calcetin" />
  </div>
</template>

<style scoped>
.layout-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.nav-producto {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.nav-producto a {
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #39495c;
  padding: 5px 10px;
  transition: all 0.2s ease;
}

.nav-producto a:hover {
  color: #16c0b0;
}

/* Vue Router añade esta clase al enlace activo */
.nav-producto a.router-link-exact-active {
  color: #16c0b0;
  border-bottom: 3px solid #16c0b0;
}
</style>
