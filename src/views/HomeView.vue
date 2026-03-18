<template>
  <div class="home-container">
    <h1>Hola a VueShopLearn soy Gabi</h1>
    <p>Una de las mejores tiendas que se ha creado con Vue</p>
    
    <router-link :to="{ name:'ProductoLayout', params:{id:'1'}}" class="button-start">
      Entrar a la Tienda
    </router-link>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 100px;
}
h1 {
  font-size: 50px;
  color: #39495c;
  margin-bottom: 10px;
}
p {
  font-size: 22px;
  color: #666;
  margin-bottom: 40px;
}
.button-start {
  background-color: #16c0b0;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.2s ease, background-color 0.2s ease;
  box-shadow: 2px 5px 10px rgba(0,0,0,0.1);
}
.button-start:hover {
  background-color: #12998d;
  transform: scale(1.05);
}
</style>