import axios from "axios";

const apiClient = axios.create({
    //La url que llamamos
    baseURL: 'http://localhost:3000',
    //Autenticacion y configuracion para comunicarnos con nuestro server
    withCredentials: false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
    },
})

export default{
    getCalcetines(id){
        if(id){
            return apiClient.get('calcetines/' +id)
        }
        return apiClient.get('/calcetines')
    }
}