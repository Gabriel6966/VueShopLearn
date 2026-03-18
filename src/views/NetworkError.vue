<template>
  <div style="text-align: center; margin-top: 50px;">
    <h1 style="font-size: 80px; color: #ff4a4a;">Vaya lo siento</h1>
    <h2>Parece ser que estamos teniendo unos problemas de conexion interna de red</h2>
    <h3>Danos un suspiro que en nada lo tenemos, <a href="#" @click.prevent="$router.go(-1)">pulsa aqui</a> para recargar</h3>
  </div>
</template>