import { defineStore } from 'pinia'
import { ref } from 'vue'

export const fondo = defineStore('tema', () => {
  //Leida de memoria del navegador
  const oscuro = ref<boolean>(localStorage.getItem('preferencia') === 'oscuro')

  const cambio = () => {
    if (oscuro.value) {
      document.body.classList.add('oscuro')
    } else {
      document.body.classList.remove('oscuro')
    }
  }

  //Al llamar la funcion aqui,en caso de que lo hayamos dejado en oscuro estara oscuro cuando lo abramos
  cambio()

  const cambiar = () => {
    oscuro.value = !oscuro.value
    localStorage.setItem('preferencia', oscuro.value ? 'oscuro' : 'claro')
    cambio()
  }
  return { oscuro, cambiar }
})
