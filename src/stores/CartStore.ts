import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { ItemCarrito } from '@/types/index'

export const CarritoTienda = defineStore('cart', () => {
  const items = ref<ItemCarrito[]>([])
  const isAnimating = ref(false)

  //Getters
  //Computed para pinia son getters
  const total = computed(() => items.value.length)
  const precioTotal = computed(() =>
    items.value.reduce((acc, item) => acc + item.price, 0).toFixed(2),
  )

  //Acciones
  function add(producto: ItemCarrito) {
    items.value.push(producto)
    isAnimating.value = true
    setTimeout(() => {
      isAnimating.value = false
    }, 300)
  }

  function eliminar(id: number) {
    const index = items.value.findLastIndex((item) => item.varianteId === id)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  function vacio() {
    items.value = []
  }

  return { items, total, precioTotal, isAnimating, add, eliminar, vacio }
})
