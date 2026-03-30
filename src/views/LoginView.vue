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

  if (correcto) router.push({ name: 'Home' })
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
    <div class="animaciones">
      <div v-for="n in 10" :key="n" class="animacion"></div>
    </div>

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

      <div></div>
    </div>
  </div>
</template>

<style scoped>
.login-pagina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #16c0b0, #39495c);
  overflow: hidden;
  position: relative;
}

.animaciones {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.animacion {
  position: absolute;
  bottom: -100px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  animation: subir 8s infinite ease-in;
}

.animacion:nth-child(1) {
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 7s;
}
.animacion:nth-child(2) {
  width: 20px;
  height: 20px;
  left: 20%;
  animation-duration: 5s;
  animation-delay: 1s;
}
.animacion:nth-child(3) {
  width: 60px;
  height: 60px;
  left: 30%;
  animation-duration: 9s;
  animation-delay: 2s;
}
.animacion:nth-child(4) {
  width: 80px;
  height: 80px;
  left: 40%;
  animation-duration: 6s;
  animation-delay: 0.5s;
}
.animacion:nth-child(5) {
  width: 25px;
  height: 25px;
  left: 50%;
  animation-duration: 8s;
  animation-delay: 3s;
}

.animacion:nth-child(6) {
  width: 50px;
  height: 50px;
  left: 60%;
  animation-duration: 7s;
  animation-delay: 1.5s;
}
.animacion:nth-child(7) {
  width: 35px;
  height: 35px;
  left: 70%;
  animation-duration: 6s;
  animation-delay: 2.5s;
}
.animacion:nth-child(8) {
  width: 70px;
  height: 70px;
  left: 80%;
  animation-duration: 9s;
  animation-delay: 0s;
}
.animacion:nth-child(9) {
  width: 15px;
  height: 15px;
  left: 90%;
  animation-duration: 5s;
  animation-delay: 4s;
}
.animacion:nth-child(10) {
  width: 45px;
  height: 45px;
  left: 5%;
  animation-duration: 8s;
  animation-delay: 3.5s;
}

@keyframes subir {
  0% {
    transform: translateY(0);
    rotate: (0deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-110vh);
    rotate: (720deg);
    opacity: 0;
  }
}

.login-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 420px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.logo {
  font-size: 50px;
  text-align: center;
}

h1 {
  color: #39495c;
  text-align: center;
  font-size: 28px;
  margin: 0;
}

h2 {
  color: #16c0b0;
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
  color: #39495c;
  font-size: 14px;
}

.campo input {
  padding: 10px 15px;
  border: 2px solid #d8d8d8;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.2s ease;
  width: 100%;
  box-sizing: border-box;
}

.campo input:focus {
  outline: none;
  border-color: #16c0b0;
}

.registrar {
  background: linear-gradient(135deg, #16c0b0, #12998d);
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
  background: #ffe0e0;
  color: #ff4a4a;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
}

.cambiar {
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 0;
}

.cambiar span {
  color: #16c0b0;
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
  color: #888;
  font-size: 14px;
  margin: 10px 0;
}

.divisor::before,
.divisor::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #d8d8d8;
}
.divisor:not(:empty)::before {
  margin-right: 15px;
}
.divisor:not(:empty)::after {
  margin-right: 15px;
}

.invitado {
  background: transparent;
  border: 2px solid #39495c;
  color: #39495c;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.invitado:hover {
  background: #39495c;
  color: white;
}
</style>
