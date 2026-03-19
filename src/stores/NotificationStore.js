import { reactive } from "vue";

export const notificatioModel = reactive({
    mensaje:'',

    mostrar(texto){
        this.mensaje=texto
        setTimeout(()=>{
            this.mensaje=''
        },3000)
    }

})