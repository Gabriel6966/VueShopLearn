import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import TiendaService from '@/services/TiendaService'
import type { Usuario } from '@/types/index'

export const datos = defineStore('usuario', () => {
  const usuario = ref<Usuario | null>(null)
  const logueado = computed(() => usuario.value !== null)
  const premium = computed(() => usuario.value?.premium ?? false)
  const nombre = computed(() => usuario.value?.nombre ?? '')
  const error = ref<string>('')

  async function login(email: string, contrasena: string): Promise<boolean> {
    try {
      const respuesta = await TiendaService.encontrar(email)
      const encontrado: Usuario = respuesta.data[0]

      if (!encontrado || encontrado.contrasena !== contrasena) {
        error.value = 'El correo o la contraseña son incorrectas'
        return false
      }

      // Eliminar la contraseña antes de guardarla en el estado y localStorage
      delete encontrado.contrasena

      usuario.value = encontrado

      //Guardamos en el localstorage para que haya persistencia entre sesiones
      localStorage.setItem('usuario', JSON.stringify(encontrado))
      error.value = ''
      return true
    } catch (err) {
      error.value = 'Error de conexion'
      console.error(err)
      return false
    }
  }

  async function registro(nombre: string, email: string, contrasena: string): Promise<boolean> {
    try {
      //Comprobaciones de existencia
      const respuesta = await TiendaService.encontrar(email)
      if (respuesta.data.length > 0) {
        error.value = 'Hay una cuenta existente con este gmail'
        return false
      }
      const nuevo: Usuario = {
        nombre,
        email,
        contrasena,
        premium: false,
      }
      const creado = await TiendaService.registrar(nuevo)
      const usuarioSinPass = { ...creado.data }
      delete usuarioSinPass.contrasena

      usuario.value = usuarioSinPass
      localStorage.setItem('usuario', JSON.stringify(usuarioSinPass))
      error.value = ''
      return true
    } catch (err) {
      error.value = 'Error al intentar cread la cuenta'
      console.error(err)
      return false
    }
  }

  function salida(): void {
    usuario.value = null
    localStorage.removeItem('usuario')
  }

  //Funcion de guardado al recargar pagina
  function conectada(): void {
    const guardado = localStorage.getItem('usuario')
    //Comprobamos que no sea null antes de pasearlo
    if (guardado) {
      usuario.value = JSON.parse(guardado)
    }
  }

  return { usuario, logueado, premium, nombre, error, login, registro, salida, conectada }
})
