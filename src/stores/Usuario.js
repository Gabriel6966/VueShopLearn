import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const Usuario = defineStore('usuario', () => {
  const nombre = ref('')
  const contra = ref('')
  const logueado = ref(false)

  //Usuarios registrados por defecto(si feura una pagina real vendrian de una API)

  const usuarios = [
    { nombre: 'gabriel', constra: '1234', premium: true },
    { nombre: 'andrei', constra: '0000', premium: false },
  ]

  //El premium depende si esta loagueado
  const premium = computed(() => {
    const usuario = usuarios.find((u) => u.nombre === nombre.value)
    return usuario?.premium ?? false
  })

  function login(nombreEntrada, contraEntrada) {
    const usuario = usuarios.find((u) => u.nombre === nombreEntrada && u.constra === contraEntrada)
    if (usuario) {
      nombre.value = usuario.nombre
      logueado.value = true
      return true
    } else {
      return false
    }
  }
  function salida() {
    nombre.value = ''
    contra.value = ''
    logueado.value = false
  }

  return { nombre, logueado, premium, login, salida }
})
