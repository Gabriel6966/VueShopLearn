import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
import { datos } from './stores/Usuario'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

//mediante el metodo de recuperar(conectada) recuperamos la sesion al montar la aopp
const log = datos()
log.conectada()
app.mount('#app')
