import axios from "axios";

const instance =  axios.create({baseURL:process.env.REACT_API_URL});
 
const getHospitals = async ()=>{
    const hospitales = await instance.get('/hospitales/');
    return hospitales.data;
}

const getInsumos = async ()=>{
    const insumos  = await instance.get('/insumos/');
    return insumos.data;
}

const postPeticion = async (postData)=>{
    const peticion = await instance.post('/peticiones/new',postData)
    return peticion.data;
}

const getDataBodega = async ()=>{
    const inventario = await instance.get('/bodega/');
    return inventario
}

const addHospital = async (postData)=>{
    const hospital = await instance.post('/hospitales/new',postData); 
    return hospital;
}

export {getHospitals,getInsumos,postPeticion,getDataBodega,addHospital};