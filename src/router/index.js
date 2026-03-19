import ProductoLayout from '../views/ProductoLayout.vue'
import ProductoInfo from '../views/ProductoInfo.vue'
import ProductoResenas from '../views/ProductoResenas.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'
import { createRouter,createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TiendaService from '@/services/TiendaService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Home',
      component:HomeView
    },
    {
      path:'/tienda',
      name: 'TiendaCompleta',
      component:TiendaService
    },
    {
      path: '/item/:id',
      redirect: to =>{
        return{
          path:`/producto/${to.params.id}`
        }
      }
      },
      {
      path: '/producto/:id',
      name: 'ProductoLayout',
      component: ProductoLayout,
      props: true, // Permite recibir el :id como prop
      //Ponemos a los hijos
      children: [
        {
          //Al tener el path vacio eso significa qyue nos lleva al path de arriba del :id
          path: '',
          name: 'ProductoInfo',
          component: ProductoInfo
        },
        {
          path: 'resenas', // Ruta de reseñas (/producto/1/resenas)
          name: 'ProductoResenas',
          component: ProductoResenas
        }
      ]
    },
    {
      //Te lleva a una ruta de error 404 y da igual si es evento erroneo pagina o etc
      path:'/404/:resource',
      name:'404Resource',
      component: NotFound,
      props:true
    },
    {
      path:'/network-error',
      name:'NetworkError',
      component: NetworkError
    },
    {
      //path para mirar todas las rutas que se juntan y no existen
      path:'/:catchAll(.*)',
      name:'NotFoundGeneral',
      component:NotFound,
      props:{
        resource:'pagina'
      }
    }
  ]
})

export default router
