import axios from 'axios'

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
  getCalcetines(id) {
    return apiClient.get(id ? `/calcetines/${id}` : '/calcetines')
  },

  async opiniones(productoId, opinion) {
    const respuesta = await apiClient.get(`/calcetines/${productoId}`)
    const opiactuales = respuesta.data.reviews || []
    return apiClient.patch(`/calcetines/${productoId}`, {
      reviews: [...opiactuales, opinion],
    })
  },

  recogeropiniones(productoId) {
    return apiClient.get(`/calcetines/${productoId}`)
  },
}
