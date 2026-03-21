<script setup>
import { ref } from 'vue'
import { Usuario } from '@/stores/Usuario'
import { useRouter } from 'vue-router'

const usuario = Usuario()
const router = useRouter()

const nombre = ref('')
const contra = ref('')
const error = ref('')

const onSubmit = () => {
  if (!nombre.value || !contra.value) {
    error.value = 'Completa todos los campos'
    return
  }
  const logueado = usuario.login(nombre.value, contra.value)
  if (logueado) {
    router.push({ name: 'Home' })
  } else {
    error.value = 'Usuario o contraseña incorrectas'
  }
}
</script>
<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Iniciar sesion</h1>

      <div v-if="error" class="error-msg">{{ error }}</div>

      <form @submit.prevent="onSubmit">
        <label for="nombre">Usuario</label>
        <input id="nombre" v-model="nombre" placeholder="Tu nombre de usuario" />

        <label for="contra">Constraseña</label>
        <input id="contra" v-model="contra" type="password" placeholder="Tu contraseña" />

        <button class="button" type="submit">Entrar</button>
      </form>

      <p class="hint">
        Prueba: usuario <strong>gabriel</strong> / contraseña <strong>1234</strong>
      </p>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

h1 {
  color: #39495c;
  text-align: center;
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  color: #39495c;
}

.error-msg {
  background: #ffe0e0;
  color: red;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
}

.hint {
  text-align: center;
  color: #999;
  font-size: 13px;
  margin-top: 10px;
}
</style>
