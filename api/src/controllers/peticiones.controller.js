const peticionesServices = require('../services/peticiones.service');

exports.createPeticion = async (req,res,next) =>{
    const payload = req.body;
    try {
        const peticion = await peticionesServices.addOne(payload);
        res.send(peticion);
    } catch (error) {
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
    const id = req.params.id;
    try {
        const peticion = peticionesServices.getById(id);
        res.send(peticion);
    } catch (error) {
        next(error);
    }
}