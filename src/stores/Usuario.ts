import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { UsuarioLogin } from '@/types/index'

export const Usuario = defineStore('usuario', () => {
  const nombre = ref<string>('')
  const logueado = ref<boolean>(false)

  //Usuarios registrados por defecto(si feura una pagina real vendrian de una API)

  ///Tipamos el array de los usuarios
  const usuarios: UsuarioLogin[] = [
    { nombre: 'gabriel', contra: '1234', premium: true },
    { nombre: 'andrei', contra: '0000', premium: false },
  ]

  //El premium depende si esta loagueado
  const premium = computed(() => {
    return usuarios.find((u) => u.nombre === nombre.value)?.premium ?? false
  })

  function login(nombreEntrada: string, contraEntrada: string): boolean {
    const usuario = usuarios.find((u) => u.nombre === nombreEntrada && u.contra === contraEntrada)
    if (usuario) {
      nombre.value = usuario.nombre
      logueado.value = true
      return true
    }
    return false
  }
  function salida(): void {
    nombre.value = ''
    logueado.value = false
  }

  return { nombre, logueado, premium, login, salida }
})
