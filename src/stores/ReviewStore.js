import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useReviewStore = defineStore('reviews', () => {
  const reviews = ref({})

  function add(productoId, opinion) {
    if (!reviews.value[productoId]) {
      reviews.value[productoId] = []
    }
    reviews.value[productoId].push(opinion)
  }

  function verResenas(productoId) {
    return reviews.value[productoId] ?? []
  }

  return { reviews, add, verResenas }
})
