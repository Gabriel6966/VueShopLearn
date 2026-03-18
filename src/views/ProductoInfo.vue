<script setup>
import {ref , computed} from 'vue'


const props = defineProps(['calcetin'])
//Eventos que vamos a enviar
const emit = defineEmits(['add-to-cart', 'delete-element'])

const selectedVariant = ref(0)
//Propiedades
const title = computed(()=> props.calcetin.brand+ '' +props.calcetin.product)
const psale = computed(()=> title.value + 'esta en venta')
const image = computed (()=> props.calcetin.variantes[selectedVariant.value].image)
const inStock = computed(()=> props.calcetin.variantes[selectedVariant.value].cantidad)
const onSale = computed(()=> props.calcetin.variantes[selectedVariant.value].enRebajas)

//Metodos

const actualizarVariante = (index) => {
    selectedVariant.value = index
}

const anadirAlCarrit = () =>{
emit('add-to-cart'), props.calcetin.variantes[selectedVariant].id
}

const eliminarElemento = () =>{
    emit('delete-element'), props.calcetin.variantes[selectedVariant.value].id
}
</script>

<template>
    <div class="product-container">
        <div class="product-image">
            <img :src="image" :class="{'out-of-stock-img': inStock===0}">
        </div>
    
    
    <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock>10">En stock</p>
        <p v-else-if="inStock<=10 && inStock >0">Apunto de terminarse!!</p>
        <p v-else>Fuera de stock</p>
        <p v-if="onSale">{{psale}}</p>

        <ul>
            <li v-for="detalle in calcetin.detalles" :key="detalle">{{ detalle}}</li>
        </ul>
        
        <div class="selection-row">
            <div class="color-circles">
                <div
                v-for="(variante,index) in calcetin.variantes"
                :key="variante.id"
                @mouseover="actualizarVariante(index)"
                class="color-circle"
                :style="{backgroundColor: variante.color}">
            </div>
        </div>
        <div class="price-desc">
            <h2>{{calcetin.price}} €</h2>
            <p>{{calcetin.descripcion}}</p>
        </div>
    </div>

    <div class="button-group">
        <button class="button" :class="{disabledButton: inStock===0}" :disabled="inStock===0" @click="anadirAlCarrit">
            Añadir al carrito
        </button>
        <button class="button" :class="{disabledButton: inStock===0}" :disabled="inStock===0" @click="eliminarElemento">
            Eliminar del carrito
        </button>
        </div>
    </div>
    </div>
    
</template>