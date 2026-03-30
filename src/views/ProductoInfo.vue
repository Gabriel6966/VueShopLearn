<script setup lang="ts">
import { ref, computed } from 'vue'
import { NotificacionStore } from '@/stores/NotificationStore'
import { CarritoTienda } from '@/stores/CartStore'
import type { Producto } from '@/types/index'

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
  return tamaño?.tallas ?? []
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
      <img :src="image" :alt="title" :class="{ 'out-of-stock-img': inStock === 0 }" />
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
  border: 2px solid var(--color-borde);
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: var(--color-texto-oscuro);
  background-color: var(--color-tarjetas);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
}

.talla-box:hover {
  border-color: var(--color-primario);
  color: var(--color-primario);
}

.talla-activa {
  background-color: var(--color-primario);
  color: white;
  border-color: var(--color-primario);
}

.product-container {
  display: flex;
  gap: 40px;
  padding: 30px;
  background-color: var(--color-tarjetas);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--color-borde);
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
  flex-direction: row;
}
.product-info {
  flex: 1;
  color: var(--color-texto-oscuro);
  transition: color 0.3s ease;
}
.product-info h1 {
  color: var(--color-texto-oscuro);
  transition: color 0.3s ease;
  margin-top: 0;
  font-size: 32px;
}
.button-group {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.button {
  background-color: var(--color-texto-oscuro);
  color: var(--color-fondo);
  border: 2px solid var(--color-texto-oscuro);
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: var(--color-primario);
  border-color: var(--color-primario);
  color: white; /*Forzamos a que el texto siempre sea blanco*/
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
.disabledButton,
.button:disabled {
  background-color: #cccccc !important;
  border-color: #cccccc !important;
  color: #666666 !important;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
  opacity: 0.7;
}

.price-desc {
  border-left: 3px solid var(--color-primario);
  padding-left: 15px;
}
.selection-row {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  background-color: rgba(0, 0, 0, 0.03);
  padding: 15px;
  border-radius: 8px;
  border: 1px solid var(--color-borde);
  transition: border-color 0.3s ease;
}

.color-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--color-borde);
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.3s ease;
}
.color-circle:hover {
  transform: scale(1.1);
}
.product-image {
  flex: 0 0 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 2px solid var(--color-borde);
  padding: 15px;
  background-color: var(--color-tarjetas);
  transition: all 0.3s ease;
  border-radius: 8px;
}
.out-of-stock-img {
  opacity: 0.5;
}

.stock-text {
  font-weight: bold;
  margin-bottom: 5px;
}
.stock-text.warning {
  color: orange;
}
.stock-text.danger {
  color: red;
}
.sale-text {
  font-weight: bold;
  margin-bottom: 20px;
}

ul {
  padding-left: 20px;
  margin-bottom: 25px;
}

li {
  margin-bottom: 8px;
  font-size: 16px;
}

.price-desc h2 {
  margin: 0;
  color: var(--color-primario);
  font-size: 28px;
}
.price-desc p {
  margin: 5px 0 0 0;
}
</style>
