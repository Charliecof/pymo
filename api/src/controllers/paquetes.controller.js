const paquetesServices = require('../services/paquetes.service');

exports.addPaquete = async (req,res,next) => {
    const payload = req.body;
    try{
        const paquete = paquetesServices.addOne(payload);
        res.send(paquete);
    }
    catch (error){
        next(error);
    }
}

exports.getPaquetesHospital = async (req,res,next) =>{
    const id = req.params;
    try {
        const paquetes = paquetesServices.getByHospitall(id);
        res.send(paquetes);
    } catch (error) {
        next(error);
    }
}