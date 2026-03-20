import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const CarritoTienda = defineStore('cart', () => {
  const items = ref([])
  const isAnimating = ref(false)

  //Getters
  //Computed para pinia son getters
  const total = computed(() => items.value.length)

  function add(id) {
    items.value.push(id)
    isAnimating.value = true
    setTimeout(() => {
      isAnimating.value = false
    }, 300)
  }

  function eliminar(id) {
    const index = items.value.indexOf(id)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  function vacio() {
    items.value = []
  }

  return { items, total, isAnimating, add, eliminar, vacio }
})
