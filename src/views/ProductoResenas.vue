<script setup>
import ReviewList from '@/components/ReviewList.vue'
import ReviewForm from '@/components/ReviewForm.vue'
import { useReviewStore } from '@/stores/ReviewStore'
import { computed, onMounted } from 'vue'

const props = defineProps(['calcetin'])
const reviewStore = useReviewStore()
const reviews = computed(() => reviewStore.resenas(props.calcetin.id))

onMounted(() => {
  reviewStore.cargarreviews(props.calcetin.id)
})
const anadirReview = (productoOpinion) => {
  //Verificacion de que calce tenga un array de review creado
  reviewStore.anadir(props.calcetin.id, productoOpinion)

  //Añadir opinion a la interfaz
}
</script>

<template>
  <div class="review-wrapper">
    <ReviewList v-if="reviews.length > 0" :reviews="reviews" />
    <div v-else class="sin-reviews">
      <p>Deja tu opinion aqui</p>
    </div>

    <ReviewForm @review-submitted="anadirReview" />
  </div>
</template>

<style scoped>
.review-wrapper {
  padding: 20px;
}

.sin-reviews {
  text-align: center;
  padding: 30px;
  color: #666;
  font-size: 18px;
  background: white;
  border-radius: 10px;
  border: 2px dashed #d8d8d8;
  margin-bottom: 20px;
}
</style>
