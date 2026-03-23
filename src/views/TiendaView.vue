<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import TiendaService from '../services/TiendaService'
import ProductoInfo from './ProductoInfo.vue'
import type { Producto } from '../types/index'

//Filtros
const Color = ref<string>('')
const Rebajas = ref<boolean>(false)
const Stock = ref<boolean>(false)
const Orden = ref<string>('')
const productos = ref<Producto[]>([])

//Montamos los productos de la API
onMounted(() => {
  TiendaService.getCalcetines()
    .then((response) => {
      productos.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

//Bucle para que saque los colores sin repetir
const colordispo = computed<string[]>(() => {
  const colores: string[] = []
  for (const producto of productos.value) {
    for (const variante of producto.variantes) {
      //En caso de que el color no este en el array lo metemos con el .includes
      if (!colores.includes(variante.color)) {
        colores.push(variante.color)
      }
    }
  }
  return colores
})

//Ordenamos mediante metodo quicksrot
function quickSort(array: Producto[], orden: string): Producto[] {
  //Excepciones
  if (array.length <= 1) return array

  //Constante la cual es el medio
  const p = array[Math.floor(array.length / 2)].price
  const menos = []
  const igual = []
  const mayor = []

  for (const producto of array) {
    if (producto.price < p) {
      menos.push(producto)
    } else if (producto.price === p) {
      igual.push(producto)
    } else {
      mayor.push(producto)
    }
  }
  //Recursividad
  if (orden === 'asc') {
    //Y ordenamos de menor a mayor,primero menores luego iguales y luego mayores
    return [...quickSort(menos, orden), ...igual, ...quickSort(mayor, orden)]
  } else {
    //Lo mismo solo que esta vez cambiamos las ultimas variables del principio  y final para que sea al reves
    return [...quickSort(mayor, orden), ...igual, ...quickSort(menos, orden)]
  }
}

//Calculamos los filtros una vez hechos arriba
const filtrados = computed<Producto[]>(() => {
  let resultado = productos.value.filter((producto) =>
    producto.variantes.some(
      (v) =>
        //añadimos esta validacion para que el resultado no devuelva con el filter un producto con el some(variable para que encuentre con el filtro que le metemos)
        //ese mismo color y precio,ya que el producto mezclaba tanto un color con el otro el stock rebajas y colores
        (Color.value === '' || v.color === Color.value) &&
        (!Rebajas.value || v.enRebajas) &&
        (!Stock.value || v.cantidad > 0),
    ),
  )

  //Recorrer productos
  for (const producto of productos.value) {
    let comprobar1 = false //variables temporales para comprobar
    let comprobar2 = false //variables temporales para comprobar
    let comprobar3 = false //variables temporales para comprobar

    for (const variante of producto.variantes) {
      //Excepcion en caso de que no tenga pase y si tiene tambien para que no nos de error
      if (variante.color === Color.value || !Color.value) comprobar1 = true
      if (variante.enRebajas || !Rebajas.value) comprobar2 = true
      if (variante.cantidad > 0 || !Stock.value) comprobar3 = true
    }
    //Y filtro final si pasan los  tres filtros anteriores
    if (comprobar1 && comprobar2 && comprobar3) {
      resultado.push(producto)
    }
  }

  //Orden en caso de que el usuario seleccione ascendente o descendente
  if (Orden.value === 'asc' || Orden.value === 'desc') {
    resultado = quickSort(resultado, Orden.value)
  }
  return resultado
})
const reiniciar = (): void => {
  Color.value = ''
  Rebajas.value = false
  Stock.value = false
  Orden.value = ''
}
</script>

<template>
  <div class="tienda-gigante">
    <h1 class="titulo-catalogo">Productos Actualmente</h1>

    <div class="filtros-bar">
      <div class="filtro-grupo">
        <label>Color:</label>
        <select v-model="Color">
          <option value="">Todos</option>
          <option v-for="color in colordispo" :key="color" :value="color">
            {{ color }}
          </option>
        </select>
      </div>

      <div class="filtro-grupo">
        <label>Precio:</label>
        <select v-model="Orden">
          <option value="">Sin ordenar</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>
      </div>

      <div class="filtro-grupo">
        <label for="check-rebajas">Solo Rebajas</label>
        <input id="check-rebajas " type="checkbox" v-model="Rebajas" />
      </div>

      <div class="filtro-grupo">
        <label>
          <input type="checkbox" v-model="Stock" />
          Solo en Stock
        </label>
      </div>

      <button class="btn-reset" @click="reiniciar">Limpiar Filtros</button>
    </div>
    <p class="resultado-count">
      <!--Contamos los productos y hacemos un operador ternario en caso de que si hay mas de un producto ke añada la s de productos y no salga producto habiendo 4 productos-->
      {{ filtrados.length }} producto{{ filtrados.length !== 1 ? 's' : '' }} encontrado{{
        filtrados.length !== 1 ? 's' : ''
      }}
    </p>

    <div v-if="filtrados.length > 0">
      <div v-for="producto in filtrados" :key="producto.id" class="producto-fila">
        <ProductoInfo :calcetin="producto" />
      </div>
    </div>

    <div v-else class="sin-resultados">
      <p>No hay productos con este filtro</p>
      <button class="btn-reset" @click="reiniciar">Ver todos</button>
    </div>
  </div>
</template>

<style scoped>
.tienda-gigante {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.titulo-catalogo {
  text-align: center;
  font-size: 40px;
  color: #39495c;
  margin-bottom: 30px;
  border-bottom: 3px solid #16c0b0;
  padding-bottom: 10px;
}

.filtros-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  margin-bottom: 20px;
}

.filtro-grupo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  color: #39495c;
}

.filtro-grupo select {
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  color: #39495c;
  cursor: pointer;
}

.filtro-grupo input[type='checkbox'] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #16c0b0;
}

.btn-reset {
  background: none;
  border: 2px solid #16c0b0;
  color: #16c0b0;
  padding: 6px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.2s ease;
  margin-left: auto;
}

.btn-reset:hover {
  background: #16c0b0;
  color: white;
}

.resultado-count {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

.sin-resultados {
  text-align: center;
  padding: 60px 0;
  color: #666;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
