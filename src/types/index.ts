export interface Variante {
  id: number
  color: string
  image: string
  cantidad: number
  enRebajas: boolean
}

export interface Tamaño {
  id: number
  color: string
  tallas: string[]
}

export interface Review {
  name: string
  review: string
  rating: number
  recommended: number
}

export interface Producto {
  id: string
  product: string
  brand: string
  price: number
  descripcion: string
  detalles: string[]
  variantes: Variante[]
  tamaños: Tamaño[]
  reviews: Review[]
}

export interface ItemCarrito {
  id: number
  nombre: string
  color: string
  image: string
  price: number
}

export interface UsuarioLogin {
  nombre: string
  contra: string
  premium: boolean
}
