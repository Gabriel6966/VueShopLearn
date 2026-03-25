import { defineStore } from 'pinia'
import { ref } from 'vue'
import TiendaService from '@/services/TiendaService'
import type { Review } from '@/types/index'

export const useReviewStore = defineStore('reviews', () => {
  type rp = { [key: string]: Review[] }
  const reviews = ref<rp>({})
  const cargando = ref(false)

  //Cargamos los reviews de la API
  async function cargarreviews(productoId: string) {
    if (reviews.value[productoId]) return
    cargando.value = true

    try {
      const respuesta = await TiendaService.recogeropiniones(productoId)
      reviews.value[productoId] = respuesta.data.reviews || []
    } catch (error) {
      console.error(error)
    } finally {
      cargando.value = false
    }
  }

  async function anadir(productoId: string, opinion: Review) {
    try {
      await TiendaService.opiniones(productoId, opinion)
      //Recargamos las reviews del producto
      delete reviews.value[productoId]
      await cargarreviews(productoId)
    } catch (error) {
      console.log(error)
    }
  }

  function resenas(productoId: string): Review[] {
    //Que nos devuelva el producto de las reviws o un array vacio con el operador ternario
    return reviews.value[productoId] ?? []
  }

  return { reviews, cargando, cargarreviews, resenas, anadir }
})
