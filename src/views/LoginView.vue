<script setup lang="ts">
import { ref } from 'vue'
import { datos } from '@/stores/Usuario'
import { useRouter } from 'vue-router'
import { NotificacionStore } from '@/stores/NotificationStore'

const usuario = datos()
const router = useRouter()
const ns = NotificacionStore()

const modo = ref<'login' | 'registro'>('login')
const nombre = ref<string>('')
const email = ref<string>('')
const contra = ref<string>('')

const onSubmit = async (): Promise<void> => {
  var correcto: boolean
  if (modo.value === 'login') {
    correcto = await usuario.login(email.value, contra.value)
  } else {
    correcto = await usuario.registro(nombre.value, email.value, contra.value)
  }

  if (correcto) {
    ns.mostrar(`Bienvenido de nuevo, ${usuario.nombre}`)
    router.push({ name: 'Home' })
  }
}
const cambio = (): void => {
  modo.value = modo.value === 'login' ? 'registro' : 'login'
  usuario.error = ''
}

const loginvitado = (): void => {
  usuario.entradainvitado() //LLaMada a la funcion
  ns.mostrar('Estas navegando como invitado')
  router.push({
    name: 'TiendaCompleta',
  })
}
</script>
<template>
  <div class="login-pagina">
    <div class="login-card">
      <div class="logo"></div>
      <h1>VueShop</h1>
      <h2>{{ modo === 'login' ? 'Iniciar sesion' : 'Crear cuenta' }}</h2>

      <div v-if="usuario.error" class="error-msg">
        {{ usuario.error }}
      </div>

      <form @submit.prevent="onSubmit">
        <div v-if="modo === 'registro'" class="campo">
          <label>Usuario</label>
          <input v-model="nombre" type="text" placeholder="Tu nombre de usuario" required />
        </div>

        <div class="campo">
          <label>Email</label>
          <input v-model="email" type="email" placeholder="correo@email.com" required />
        </div>

        <div class="campo">
          <label>Constraseña</label>
          <input v-model="contra" type="password" placeholder="Tu contraseña" required />
        </div>

        <button class="registrar" type="submit">
          {{ modo === 'login' ? 'Entrar' : 'Crear cuenta' }}
        </button>
      </form>
      <p class="cambiar">
        {{ modo === 'login' ? 'No tienes cuenta?' : 'Ya tienes una cuenta?' }}
        <span @click="cambio">
          {{ modo === 'login' ? 'Registrarte' : 'Iniciar sesion' }}
        </span>
      </p>
      <div class="divisor">o</div>
      <button type="button" class="invitado" @click="loginvitado">
        Continuar sin iniciar sesion
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-pagina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
}

.login-card {
  background: var(--color-tarjetas-oscuras, #1e1e1e);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
  width: 100%;
  max-width: 420px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid var(--color-primario-claro, #8cecc8);
}

h1 {
  color: white;
  flex-direction: column;
  gap: 5px;
  text-align: center;
}

h2 {
  color: var(--color-primario-claro, #8cecc8);
  text-align: center;
  font-size: 18px;
  margin: 0;
  font-weight: normal;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.campo label {
  font-weight: bold;
  color: var(--color-gris-claro, #e2e8f0);
  font-size: 14px;
}

.campo input {
  padding: 10px 15px;
  border: 2px solid var(--color-primario-oscuro, #4a5568);
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.2s ease;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--color-tarjetas-oscuras, #2d3748);
  color: white;
}

.campo input:focus {
  outline: none;
  border-color: var(--color-primario-claro, #8cecc8);
}

.registrar {
  background: linear-gradient(135deg, var(--color-primario), #12998d);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition:
    transform 0.1s ease,
    box-shadow 0.2s ease;
  width: 100%;
  margin-top: 5px;
}

.registrar:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(22, 192, 176, 0.4);
}

.registrar:active {
  transform: translateY(0);
}

.error-msg {
  background: rgba(255, 74, 74, 0.1);
  color: #ff4a4a;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #ff4a4a;
}

.cambiar {
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 0;
}

.cambiar span {
  color: var(--color-primario-claro, #8cecc8);
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}

.cambiar span:hover {
  color: #12998d;
}
.divisor {
  display: flex;
  align-items: center;
  text-align: center;
  color: var(--color-go, #a0aec0);
  font-size: 14px;
  margin: 10px 0;
}

.divisor::before,
.divisor::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--color-primario-oscuro, #4a5568);
}
.divisor:not(:empty)::before {
  margin-right: 15px;
}
.divisor:not(:empty)::after {
  margin-left: 15px;
}

.invitado {
  background: transparent;
  border: 2px solid var(--color-go, #a0aec0);
  color: var(--color-gris-claro, #e2e8f0);
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.invitado:hover {
  background: var(--color-texto-gris-oscuro, #a0aec0);
  color: #1e1e1e;
}
</style>
