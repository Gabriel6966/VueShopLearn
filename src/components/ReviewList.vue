<script>
    export default{
        props:{
        reviews:{
            type:Array,
            required:true
        }
    }
    }

</script>
<template>
<div class="review-list">
        <h3>Reviews: </h3>
        <ul>
        <!--Recorremos el array de reviews con review y el index  para enseñar cada opinion que se ha hecho en el formu-->
            <li v-for="(review, index) in reviews" :key="index">
            
                <p><strong>{{ review.name }}</strong></p>
                <p>{{ review.review }}</p>
                <p>Rating: {{ review.rating }}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>

.review-list{
    padding:20px;
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    margin-top: 20px;
}

.review-list ul{
    list-style-type: none;
    padding: 0;
}

.review-list li{
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
}


</style>
