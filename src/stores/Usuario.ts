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

      //Con la funcion de antes la contraseña al estar guardada en el localstorage,estara escrita al darle F12 para inspeccionar la pagina y se podria robar la contra muy facil
      //Al hacer eso a ts le decimos que almacene en una variable temporal con el _ y los tres puntos(operador rest) le decimos que coja las demas variables
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { contrasena: _contra, ...usuarioSeguro } = encontrado
      usuario.value = usuarioSeguro as Usuario

      //Guardamos en el localstorage para que haya persistencia entre sesiones
      localStorage.setItem('usuario', JSON.stringify(usuarioSeguro))
      error.value = ''
      return true
    } catch {
      // Sentinel 🛡️: Catching errors without exposing the error object.
      // Raw Axios errors leak the original request payload (including plaintext passwords)
      // in err.config.data, which could be exposed if logged to the browser console.
      error.value = 'Error de conexion'
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
      //usuario.value = creado.data
      //localStorage.setItem('usuario', JSON.stringify(creado.data))

      //Y con este texto le decimos a ts que aun que no usemos la variable contra no nos de el error
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { contrasena: _contra, ...usuarioSeguro } = creado.data
      usuario.value = usuarioSeguro as Usuario
      localStorage.setItem('usuario', JSON.stringify(usuarioSeguro))
      error.value = ''
      return true
    } catch {
      // Sentinel 🛡️: Avoiding raw error logging to prevent password leaks.
      error.value = 'Error al intentar cread la cuenta'
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
