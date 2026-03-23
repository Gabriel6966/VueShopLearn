<script setup lang="ts">
import { ref, computed } from 'vue'
import { NotificacionStore } from '../stores/NotificationStore'
import { CarritoTienda } from '../stores/CartStore'
import type { Producto } from '../types/index'

const notificacionStore = NotificacionStore()
const carritoStore = CarritoTienda()

const props = defineProps<{
  calcetin: Producto
}>()

const selectedVariant = ref<number>(0)
//Como la vairante actual se repite varias veces usaremos una computed
const actualVariante = computed(() => props.calcetin.variantes[selectedVariant.value])

//Propiedades
const title = computed(() => props.calcetin.brand + ' ' + props.calcetin.product)
const psale = computed(() => title.value + 'esta en venta')
const image = computed(() => actualVariante.value.image)
const inStock = computed(() => actualVariante.value.cantidad)
const onSale = computed(() => actualVariante.value.enRebajas)

//Validar que selecione una talla y que haya stock
const tallasDispo = computed(() => {
  //Funcion para que en cuanto slecione un color encuentre con el metodo find el color usando un if en donde si encuentra devuelve las tallas de ese color,si no nos da una array vacio
  const tamaño = props.calcetin.tamaños.find((t) => t.color === actualVariante.value.color)
  return tamaño?.talla ?? []
})

const actualizarVariante = (index: number): void => {
  selectedVariant.value = index
}

const anadirAlCarrit = (): void => {
  carritoStore.add({
    id: actualVariante.value.id,
    nombre: title.value,
    color: actualVariante.value.color,
    image: actualVariante.value.image,
    price: props.calcetin.price,
  })
  notificacionStore.mostrar('Añadido correctamente al carrito')
}

const eliminarElemento = () => {
  carritoStore.eliminar(props.calcetin.variantes[selectedVariant.value].id)
  notificacionStore.mostrar('Eliminado correctamente')
}
</script>

<template>
  <div class="product-container">
    <div class="product-image">
      <img :src="image" :class="{ 'out-of-stock-img': inStock === 0 }" />
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock > 10">En stock</p>
      <p v-else-if="inStock <= 10 && inStock > 0">Apunto de terminarse!!</p>
      <p v-else>Fuera de stock</p>
      <p v-if="onSale">{{ psale }}</p>

      <ul>
        <li v-for="detalle in calcetin.detalles" :key="detalle">{{ detalle }}</li>
      </ul>

      <div class="selection-row">
        <div class="color-circles">
          <div
            v-for="(variante, index) in calcetin.variantes"
            :key="variante.id"
            @mouseover="actualizarVariante(index)"
            class="color-circle"
            :style="{ backgroundColor: variante.color }"
          ></div>
        </div>
        <div class="price-desc">
          <h2>{{ calcetin.price }} €</h2>
          <p>{{ calcetin.descripcion }}</p>
        </div>
      </div>

      <div class="tallas-container">
        <p><strong>Talla disponibles:</strong></p>
        <div class="tallas-flex">
          <span v-for="talla in tallasDispo" :key="talla" class="talla-box">{{ talla }} </span>
        </div>
      </div>

      <div class="button-group">
        <button
          class="button"
          :class="{ disabledButton: inStock === 0 }"
          :disabled="inStock === 0"
          @click="anadirAlCarrit"
        >
          Añadir al carrito
        </button>
        <button
          class="button"
          :class="{ disabledButton: inStock === 0 }"
          :disabled="inStock === 0"
          @click="eliminarElemento"
        >
          Eliminar del carrito
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tallas-container {
  margin-bottom: 20px;
}

.tallas-flex {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.talla-box {
  border: 2px solid #d8d8d8;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #39495c;
  transition: all 0.2s;
}

.talla-box:hover {
  border-color: #16c0b0;
}

.talla-activa {
  background-color: #16c0b0;
  color: white;
  border-color: #16c0b0;
}
</style>
