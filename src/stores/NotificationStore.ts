import { ref } from 'vue'
import { defineStore } from 'pinia'

export const NotificacionStore = defineStore('notification', () => {
  const mensaje = ref('')

  function mostrar(texto: string) {
    mensaje.value = texto
    setTimeout(() => {
      mensaje.value = ''
    }, 3000)
  }
  return { mensaje, mostrar }
})
