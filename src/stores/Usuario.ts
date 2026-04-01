import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import TiendaService from '@/services/TiendaService'
import type { Usuario } from '@/types/index'

export const datos = defineStore('usuario', () => {
  const usuario = ref<Usuario | null>(null)
  const logueado = computed(() => usuario.value !== null || invitado.value)
  const premium = computed(() => usuario.value?.premium ?? false)
  const nombre = computed(() => {
    if (usuario.value) return usuario.value.nombre
    if (invitado.value) return 'Invitado'
    return ''
  })
  const error = ref<string>('')
  const invitado = ref<boolean>(false)

  async function login(email: string, contrasena: string): Promise<boolean> {
    try {
      const respuesta = await TiendaService.encontrar(email)
      const encontrado: Usuario = respuesta.data[0]

      if (!encontrado || encontrado.contrasena !== contrasena) {
        error.value = 'El correo o la contraseña son incorrectas'
        return false
      }
      // Security Fix: Prevent plaintext password exposure in reactive state and localStorage
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { contrasena: _pass, ...usuarioSeguro } = encontrado
      usuario.value = usuarioSeguro as Usuario

      //Guardamos en el localstorage para que haya persistencia entre sesiones
      localStorage.setItem('usuario', JSON.stringify(usuarioSeguro))
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
      // Security Fix: Prevent plaintext password exposure in reactive state and localStorage
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { contrasena: _pass, ...usuarioSeguro } = creado.data
      usuario.value = usuarioSeguro as Usuario
      localStorage.setItem('usuario', JSON.stringify(usuarioSeguro))
      error.value = ''
      return true
    } catch (err) {
      error.value = 'Error al intentar cread la cuenta'
      console.error(err)
      return false
    }
  }
  function entradainvitado(): void {
    usuario.value = null
    invitado.value = true
    error.value = ''
  }

  function salida(): void {
    usuario.value = null
    invitado.value = false
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

  return {
    usuario,
    logueado,
    premium,
    nombre,
    error,
    login,
    registro,
    salida,
    conectada,
    entradainvitado,
  }
})
