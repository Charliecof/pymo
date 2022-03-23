const peticionesServices = require('../services/peticiones.service');
const hospitalServices = require('../services/hospital.service');
const casosServices = require('../services/casos.service');
const paquetesServices = require('../services/paquetes.service');
exports.createPeticion = async (req,res,next) =>{
    const payload = req.body;
    try {
        const peticion = await peticionesServices.addPeticionInsumos(payload);
        const casos = await casosServices.addOne(payload.casos);
        res.send(peticion);
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.getPeticionesHostpital = async (req,res,next) =>{
    const id = req.params.id
    try {
        const peticiones = peticionesServices.getByHospital(id);
        res.send(peticiones);
    } catch (error) {
        next(error);
    }
}

exports.getPeticion = async (req,res,next) => {
    const id = parseInt(req.params.id);
    try {
        const peticion = await peticionesServices.getById(id);
        res.send(peticion);
    } catch (error) {
        next(error);
    }
}

exports.getActive = async (req,res,next)=>{
    try {
        const peticiones = await peticionesServices.getActive();
        res.send(peticiones);
    } catch (error) {
        next(error)
    }
}

exports.acceptPeticion = async (req,res,next) =>{
    const id = parseInt(req.params.id);
    try {
        await peticionesServices.aproveById(id);
        const peticiones = await peticionesServices.getById(id);
        peticiones.insumos.forEach(element => {
            delete element.id
            delete element.id_peticion
        });
        const paquetes = await paquetesServices.addPaquete(peticiones);
        console.log(paquetes);
        res.send(paquetes)
    } catch (error) {
        next(error)
    }
}

exports.peticionesGraph = async (req,res,next) =>{
    const id = parseInt(req.params.id);
    console.log(id);
    try {
        const peticiones = await peticionesServices.getByHospital(id);
        const cubrebocas = peticiones.map(pet =>{
            console.log(pet.date.toISOString().split('T')[0]);
            return{
                x: pet.date.toISOString().split('T')[0],
                y: pet.insumos[0].cantidad
            }
        });
        const caretas = peticiones.map(pet =>{
            console.log(pet.date.toISOString().split('T')[0]);
            return{
                x: pet.date.toISOString().split('T')[0],
                y: pet.insumos[1].cantidad
            }
        });
        const lentes = peticiones.map(pet =>{
            console.log(pet.date.toISOString().split('T')[0]);
            return{
                x: pet.date.toISOString().split('T')[0],
                y: pet.insumos[2].cantidad
            }
        });
        const data =[
            {
                id: 'Cubrebocas',
                data: cubrebocas
            },
            {
                id:'Caretas',
                data: caretas
            },
            {
                id: 'Lentes',
                data: caretas
            }
        ]
        res.send(data);
    } catch (error) {
        next(error)
    }
}