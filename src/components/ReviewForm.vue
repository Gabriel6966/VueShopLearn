<!--Cambiasmos de la API export default a la 'Composition API' ya que en caso de que querramos usar TS nos sera mejor-->
<script setup lang="ts">
import { ref } from 'vue'
import { Review } from '@/types/index'

const emit = defineEmits<{
  'review-submitted': [review: Review]
}>()
const name = ref('')
const review = ref('')
const rating = ref<number | null>(null)
const recommended = ref<number | null>(null)

const onSubmit = () => {
  if (!name.value || !review.value || !rating.value || recommended.value === null) {
    alert('Completa el formulario entero antes de entregar')
    return
  }
  emit('review-submitted', {
    name: name.value,
    review: review.value,
    rating: rating.value,
    recommended: recommended.value,
  })

  name.value = review.value = ''
  rating.value = recommended.value = null
}
</script>

<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />

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

    <input class="button" type="submit" value="Submit" />
  </form>
</template>
