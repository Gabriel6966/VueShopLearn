import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const CarritoTienda = defineStore('cart', () => {
  const items = ref([])
  const isAnimating = ref(false)

  //Getters
  //Computed para pinia son getters
  const total = computed(() => items.value.length)
  const precioTotal = computed(() =>
    items.value.reduce((acc, item) => acc + parseFloat(item.price), 0).toFixed(2),
  )

  function add(producto) {
    items.value.push(producto)
    isAnimating.value = true
    setTimeout(() => {
      isAnimating.value = false
    }, 300)
  }

  function eliminar(id) {
    const index = items.value.findIndex((item) => item.id === id)
    if (index !== -1) items.value.splice(index, 1)
  }

  function vacio() {
    items.value = []
  }

  return { items, total, precioTotal, isAnimating, add, eliminar, vacio }
})
