app.component('product-details', {
//Hacemos el prop y llamamos al display del main declarandole el tipo
  props: {
    details: {
      type: Array,
      required: true
    }
  },

  template: 
  /*html*/
  `
  <ul>
    <li v-for="detalle in details">{{ detalle }}</li>
  </ul>
  `
})