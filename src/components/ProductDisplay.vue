<script>
import ReviewForm from './ReviewForm.vue';
import ReviewList from './ReviewList.vue';

export default{
    components:{
        ReviewForm,
        ReviewList
    },
    props:{
        premium:{
            type: Boolean,
            required:true,
        },
        
    },

    data(){
        return{
            product: 'Socks',
            price: '6.75',
            descripcion: 'Unos calcetines comodos y suaves para el uso deportivo',
            selectedVariant:0,
            url: 'https://vuejs.org/guide/quick-start.html',
            
            detalles:['50% cotton','30% wool', '20% polyester'],
            variantes:[
                {id:2234, color: 'green', image: './src/assets/images/socks_green.jpg',cantidad:50,enRebajas:true},
                {id:2235, color: 'blue', image: './src/assets/images/socks_blue.jpg',cantidad:0,enRebajas:false},
                
            ],
            tamaños:[
                {id:1, color: 'green', tallas:['S','M','L']},
                {id:2, color: 'blue', tallas:['XL','XXL','XXXL']},
            ],
            brand:'Vue Mastery',     
            reviews:[],       


            
        }   
    },
    methods:{
        
        addToCart(){
            //Con esto emitimos la accion al padre y le pasamos el id de la variante para añadirlo al carrito
            this.$emit('add-to-cart', this.variantes[this.selectedVariant].id)
        },
        updateVariante(index){
            //Ponemos el index para que a la hora de hacer el @mouseover se actualice la imagen y el stock segun la variante que estemos pasando por el index
            this.selectedVariant= index;
            
        },
        DeleteElement(){
            //Hacemos lo mismo con el añadir pero para eliminar.pasandole en un array el id que querremos eliminar
            this.$emit('delete-element', this.variantes[this.selectedVariant].id)
        },
        addReview(productoOpinion){
            this.reviews.push(productoOpinion)
        }
    },
    computed:{
        title(){
            return this.brand + ' ' + this.product
        },
        psale(){
            return this.brand + ' ' + this.product +' is on sale'
        },
        image(){
            return this.variantes[this.selectedVariant].image
        },
        inStock(){
            return this.variantes[this.selectedVariant].cantidad
        },
        onSale(){
            return this.variantes[this.selectedVariant].enRebajas
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return 2.99
        },

    }
}
    

</script>

<template>
    <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <!--Con eso llamamos a la imagen por su nombre del js sin que haga falta pasarle toda la ruta-->
            <img 
            :src="image"
            :class="{'out-of-stock-img':inStock===0}"
            >
            
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock >10" >In stock</p>
            
            <p v-else-if="inStock <=10 && inStock >0">Almost sold out!</p>
            <p v-else>Out of stock</p>
            <p> Shipping: {{shipping}}</p>

            <p v-if="onSale">{{psale}}</p>
            <p v-else>Not on sale</p>
            <ul>
              <li v-for="detalle in detalles">{{detalle}}</li>
            </ul>
            <div v-for="tamaño in tamaños" :key="tamaños.id">
                <ul v-if="tamaño.color === variantes[selectedVariant].color">
                <p><strong>Tallas disponibles {{ tamaño.color }} color:</strong></p>
              <li v-for="talla in tamaño.tallas">{{ talla }}</li>
            </ul>
            </div>
            <div class="selection-row">
                <div class="color-circles">
                    <div 
            v-for="(variante, index) in variantes" 
            :key="variante.id"
            @mouseover="updateVariante(index)"
            class="color-circle"
            :style="{backgroundColor: variante.color }">
          </div>
                </div>
                <div class="price-desc">
                    <h2> {{ price }} €</h2>
                    <p>{{ descripcion }}</p>
                </div>
            </div>

            <div class="button-group">
                
            <button
            class="button"
            :class="{disabledButton: inStock===0}" 
            :disabled="inStock===0"
            v-on:click="addToCart"

            >Add to Cart</button>

            <button 
            class="button"
            :class="{disabledButton: inStock===0}"
            :disabled="inStock===0"
            v-on:click="DeleteElement"
            >Delete element Cart</button>
            </div>
            </div>
            </div>

            <div class="review-wrapper">
            <!--Un if para validar que hay reviews y no mostrar el panel sin nada,-->
            <review-list v-if="reviews.length > 0" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
            </div>
          </div>

    </template>