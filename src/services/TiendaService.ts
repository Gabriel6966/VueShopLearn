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
    return apiClient.get(id ? `/calcetines/${encodeURIComponent(id)}` : '/calcetines')
  },

  async opiniones(productoId: string, opinion: Review) {
    const safeId = encodeURIComponent(productoId)
    const respuesta = await apiClient.get(`/calcetines/${safeId}`)
    const opiactuales = respuesta.data.reviews || []
    return apiClient.patch(`/calcetines/${safeId}`, {
      reviews: [...opiactuales, opinion],
    })
  },

  recogeropiniones(productoId: string) {
    return apiClient.get(`/calcetines/${encodeURIComponent(productoId)}`)
  },

  encontrar(email: string) {
    return apiClient.get('/usuarios', {
      params: { email }
    })
  },

  registrar(usuario: object) {
    return apiClient.post('/usuarios', usuario)
  },
}
