import axios from 'axios'
import type { Review } from '@/types/index'

const apiClient = axios.create({
  //La url que llamamos
  baseURL: 'http://localhost:3000',
  //Autenticacion y configuracion para comunicarnos con nuestro server
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getCalcetines(id?: string) {
    // 🛡️ Security: Use encodeURIComponent for route parameters to prevent injection
    return apiClient.get(id ? `/calcetines/${encodeURIComponent(id)}` : '/calcetines')
  },

  async opiniones(productoId: string, opinion: Review) {
    // 🛡️ Security: Use encodeURIComponent for route parameters
    const safeId = encodeURIComponent(productoId)
    const respuesta = await apiClient.get(`/calcetines/${safeId}`)
    const opiactuales = respuesta.data.reviews || []
    return apiClient.patch(`/calcetines/${safeId}`, {
      reviews: [...opiactuales, opinion],
    })
  },

  recogeropiniones(productoId: string) {
    // 🛡️ Security: Use encodeURIComponent for route parameters
    return apiClient.get(`/calcetines/${encodeURIComponent(productoId)}`)
  },

  encontrar(email: string) {
    // 🛡️ Security: Use params object to safely encode query parameters and prevent parameter pollution
    return apiClient.get('/usuarios', { params: { email } })
  },

  registrar(usuario: object) {
    return apiClient.post('/usuarios', usuario)
  },
}
