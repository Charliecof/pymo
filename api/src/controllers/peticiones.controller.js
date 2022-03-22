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
    try {
        const hospitalList = await hospitalServices.getAll();
        console.log(hospitalList);
        const response = await Promise.all(hospitalList.map( async hospital=>{
            const peticiones = await peticionesServices.getByMesHospital(hospital.id);
            return{
                id: hospital.name,
                data:[...peticiones]
            }
        }));
        res.send(response);
    } catch (error) {
        next(error)
    }
}