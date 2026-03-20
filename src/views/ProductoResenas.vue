<script setup>
import ReviewList from '@/components/ReviewList.vue'
import ReviewForm from '@/components/ReviewForm.vue'

const props = defineProps(['calcetin'])

const anadirReview = (productoOpinion) => {
  //Verificacion de que calce tenga un array de review creado
  if (!props.calcetin.reviews) {
    props.calcetin.reviews = []
  }
  //Añadir opinion a la interfaz
  props.calcetin.reviews.push(productoOpinion)
}
</script>

<template>
  <div class="review-wrapper">
    <ReviewList
      v-if="calcetin.reviews && calcetin.reviews.length > 0"
      :reviews="calcetin.reviews"
    />
    <ReviewForm @review-submitted="anadirReview" />
  </div>
</template>
