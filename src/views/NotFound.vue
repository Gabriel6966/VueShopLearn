<script setup>

    defineProps({
        resource: { 
        type: String,
        required: true,
        default: 'pagina'
    }
})
</script>

<template>
  <div style="text-align: center; margin-top: 50px;">
    <h1 style="font-size: 80px; color: #ff4a4a;">Error 404</h1>
    <h2>El {{ resource }} que quieres buscar no se encuentra</h2>
    <router-link :to="{ name: 'Inicio' }" class="button" style="display:inline-block; margin-top: 20px;">Volver al inicio</router-link>
  </div>
</template>