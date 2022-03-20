const casosServices = require('../services/casos.service');

exports.addCaso = async(req,res,next) =>{
    const payload = req.body;
    try {
        const caso = await casosServices.addOne(payload);
        res.send(caso);
    } catch (error) {
        next(error);
    }
}

exports.getCasosHospital = async (req,res,next) =>{
    const id = req.paramas.id;
    try {
        const casos = await casosServices.getByHospital(id);
        res.send(casos);
    } catch (error) {
        next(error);
    }
}