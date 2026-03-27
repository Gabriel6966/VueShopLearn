import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ReviewList from '@/components/ReviewList.vue'

const prueba = [
  { name: 'Brian', review: 'Normales', rating: 4, recommended: 1 },
  { name: 'Maria', review: 'Basicos', rating: 2, recommended: 0 },
]

describe('ReviewList.vue', () => {
  it('opiniones que le pasamos', () => {
    const contenedor = mount(ReviewList, {
      props: {
        reviews: prueba,
      },
    })
    //expect(contenedor.text()).toContain('Normales')
    //expect(contenedor.findAll('li')).toHaveLength(2)

    //Aplicamos el concepto de snapshot(basicamente hace una foto y la compara con la vieja  y si cambia algo nos avisa)
    expect(contenedor.html()).toMatchSnapshot()
  })

  it('no peta si no hay nada', () => {
    const contenedor = mount(ReviewList, {
      props: {
        reviews: [],
      },
    })
    //expect(contenedor.findAll('li')).toHaveLength(0)
    //Aqui tambien
    expect(contenedor.html()).toMatchSnapshot()
  })
})
