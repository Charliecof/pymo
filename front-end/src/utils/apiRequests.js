import axios from 'axios';

const instance = axios.create({ baseURL: process.env.REACT_API_URL });

const getHospitals = async () => {
	const hospitales = await instance.get('/hospitales/');
	return hospitales.data;
};

const getInsumos = async () => {
	const insumos = await instance.get('/insumos/');
	return insumos.data;
};

const postPeticion = async (postData) => {
	const peticion = await instance.post('/peticiones/new', postData);
	return peticion.data;
};

const getDataBodega = async () => {
	const inventario = await instance.get('/bodega/');
	return inventario;
};

const addHospital = async (postData) => {
	const hospital = await instance.post('/hospitales/new', postData);
	return hospital;
};

const getPeticionesGraph = async (id) => {
	const data = await instance.get(`/peticiones/graph/${id}`);
	return data.data;
};

const getActivePeticiones = async () => {
	const peticiones = await instance.get('/peticiones/active');
	return peticiones.data;
};

const getPaquetesGraph = async (id) =>{
    const data = await instance.get(`/paquetes/graph/${id}`);
    return data.data;
}

const accept = async (id)=>{
    const peticion = await instance.get(`/peticiones/accept/${id}`);
    return peticion;
}

export {
	getHospitals,
	getInsumos,
	postPeticion,
	getDataBodega,
	addHospital,
	getPeticionesGraph,
    getActivePeticiones,
    accept,
    getPaquetesGraph
};
