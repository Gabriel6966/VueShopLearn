<script>
export default{
    data(){
        return{
                name:'',
                review:'',
                rating: null,
                recommended:null,
        }
    },
    methods:{
        onSubmit(){
            //Validaciones basicas
            if(this.name === '' || this.review === '' || this.rating === null || this.recommended===null){
                alert('Complete the full form please before submitting')
                return
            }
            //Cogemos con la variable let productoOpinion el nombre review rating y recommended
            let productoOpinion={
                name:this.name,
                review:this.review,
                rating:this.rating,
                recommended:this.recommended,
            }
            //Emitimos el evento que hacemos mediante el review que nos han dado y se lo mandamos al padre 
            this.$emit('review-submitted', productoOpinion)
        
            this.name='',
            this.review='',
            this.rating=null,
            this.recommended=null
        }
    }
    
}
</script>

<template>
<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
         <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
        </select>

        <label for="recommended">Would you recommend this product?</label>
        <select id="recommended" v-model.number="recommended">
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>


        <input class="button" type="submit" value="Submit">
    </form>
</template>

