import { describe, it, expect, vi, beforeEach } from 'vitest'
import TiendaService from '@/services/TiendaService'
import type { AxiosResponse } from 'axios'

//Mockeamos axios para la llamada falsa de API
vi.mock('axios')

describe('TiendaService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('obtener todos los calcetines', async () => {
    const falso = [
      { id: '1', product: 'Calcetines rojos' },
      { id: '2', product: 'Calcetines azules' },
    ]
    //Usaios el AxiosResponse para que no se queje Ts ya que necesita el valor que le pasamos tenga la misma forma cuando lo devuelva
    vi.spyOn(TiendaService, 'getCalcetines').mockResolvedValue({
      data: falso,
    } as AxiosResponse)

    const respuesta = await TiendaService.getCalcetines()

    expect(respuesta.data).toEqual(falso)
  })

  it('obtener calcetin por su id', async () => {
    const cfalso = {
      id: '5',
      product: 'Calcetines verdes',
    }

    vi.spyOn(TiendaService, 'getCalcetines').mockResolvedValue({
      data: cfalso,
    } as AxiosResponse)

    const respuesta = await TiendaService.getCalcetines('5')

    expect(respuesta.data).toEqual(cfalso)
  })
})
