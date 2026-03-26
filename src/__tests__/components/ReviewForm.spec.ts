import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ReviewForm from '@/components/ReviewForm.vue'

describe('ReviewForm.vue', () => {
  it('funciona con los datos correctos al enviar', async () => {
    //Creamos el formulario
    const contenedor = mount(ReviewForm)

    await contenedor.find('#name').setValue('Gabriel')
    await contenedor.find('#review').setValue('Buenos calcetines')
    await contenedor.find('#rating').setValue('5')
    await contenedor.find('#recommended').setValue('1')

    await contenedor.find('form').trigger('submit') //Boton de enviar

    //Comprobaciones
    expect(contenedor.emitted('review-submitted')).toBeTruthy()
    expect(contenedor.emitted('review-submitted')![0][0]).toEqual({
      name: 'Gabriel',
      review: 'Buenos calcetines',
      rating: 5,
      recommended: 1,
    })
  })

  it('avisar si falta algo', async () => {
    const aviso = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const contenedor = mount(ReviewForm)
    await contenedor.find('form').trigger('submit')

    //Tiene que tener el texto que le pasamos el mismo texto que en el reviewform,para que no de error
    expect(aviso).toHaveBeenCalledWith('Completa el formulario entero antes de entregar')

    //Limpiamos
    aviso.mockRestore()
  })
})
