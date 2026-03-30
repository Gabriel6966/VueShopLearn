import { datos } from '@/stores/Usuario'
import LoginView from '@/views/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'
//En vez de hacer 9 imports hacemos uno que sea global con las carpeta de views y que nos pille todos los archivos .vue
const vistas = import.meta.glob('../views/*.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPostiton) {
    if (savedPostiton) {
      return new Promise((resolve) => {
        setTimeout(() => {
          //Acortamiento con los '...' lo mismo: {left:savedPosition.left,top: savedPosition.top}
          resolve({ ...savedPostiton, behavior: 'smooth' })
        }, 300)
      })
    } else {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/home',
      name: 'Home',
      component: vistas['../views/HomeView.vue'],
    },
    {
      path: '/tienda',
      name: 'TiendaCompleta',
      component: vistas['../views/TiendaView.vue'],
    },
    {
      path: '/carrito',
      name: 'Carrito',
      component: vistas['../views/CarritoView.vue'],
    },
    {
      path: '/item/:id',
      redirect: (to) => {
        return {
          path: `/producto/${to.params.id}`,
        }
      },
    },
    {
      path: '/producto/:id',
      name: 'ProductoLayout',
      component: vistas['../views/ProductoLayout.vue'],
      props: true, // Permite recibir el :id como prop
      //Ponemos a los hijos
      children: [
        {
          //Al tener el path vacio eso significa qyue nos lleva al path de arriba del :id
          path: '',
          name: 'ProductoInfo',
          component: vistas['../views/ProductoInfo.vue'],
        },
        {
          path: 'resenas', // Ruta de reseñas (/producto/1/resenas)
          name: 'ProductoResenas',
          component: vistas['../views/ProductoResenas.vue'],
        },
      ],
    },
    {
      //Te lleva a una ruta de error 404 y da igual si es evento erroneo pagina o etc
      path: '/404/:resource',
      name: '404Resource',
      component: vistas['../views/NotFound.vue'],
      props: true,
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: vistas['../views/NetworkError.vue'],
    },
    {
      //path para mirar todas las rutas que se juntan y no existen
      path: '/:catchAll(.*)',
      name: 'NotFoundGeneral',
      component: vistas['../views/NotFound.vue'],
      props: {
        resource: 'pagina',
      },
    },
  ],
})
router.beforeEach((to) => {
  const log = datos()
  if (to.name === 'Carrito' && !log.logueado) {
    return {
      name: 'Login',
    }
  }
  if (to.name === 'Login' && log.logueado) {
    return {
      name: 'Home',
    }
  }
})

export default router
