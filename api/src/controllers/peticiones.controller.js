const peticionesServices = require('../services/peticiones.service');
const hospitalServices = require('../services/hospital.service');
const bodegaServices = require('../services/bodega.service');
const casosServices = require('../services/casos.service');
const paquetesServices = require('../services/paquetes.service');
const dateUtils = require('../utils/DateUtils');
exports.createPeticion = async (req,res,next) =>{
    const payload = req.body;
    try {
        const peticion = await peticionesServices.addPeticionInsumos(payload);
        const casos = await casosServices.addOne(payload.casos);
        res.send(peticion);
    } catch (error) {
        next(error)
    }
}

exports.getPeticionesHostpital = async (req,res,next) =>{
    const id = parseInt(req.params.id);
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
        peticiones.insumos.forEach(async element => {
            const res =  await bodegaServices.updateCantidad(element.id_insumo,element.cantidad);
        });
        peticiones.insumos.forEach(element => {
            delete element.id
            delete element.id_peticion
        });
        const paquetes = await paquetesServices.addPaquete(peticiones);
        


        res.send(paquetes)
    } catch (error) {
        next(error);
    }
}

exports.peticionesGraph = async (req,res,next) =>{
    const id = parseInt(req.params.id);
    const year = parseInt(req.query.year);
    try {
        const peticiones = await peticionesServices.getByHospital(id,year);
        const cubrebocas = peticiones.map(pet =>{
            return{
                x: dateUtils.dateToMonthString(pet.date),
                y: pet.insumos[0].cantidad
            }
        });
        const caretas = peticiones.map(pet =>{
            return{
                x: dateUtils.dateToMonthString(pet.date),
                y: pet.insumos[1].cantidad
            }
        });
        const lentes = peticiones.map(pet =>{
            return{
                x: dateUtils.dateToMonthString(pet.date),
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
                data: lentes
            }
        ]
        res.send(data);
    } catch (error) {
        next(error)
    }
}