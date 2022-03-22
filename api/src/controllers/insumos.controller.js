const insumosServices = require('../services/insumos.service');

exports.addInsumo = async (req,res,next)=>{
    const payload = req.body;
    try {
        const newInsumo = await insumosServices.addOne(payload);
        res.send(newInsumo);
    } catch (error) {
        next(error);
    }
}

exports.getInsumos = async (req,res,next) =>{
    try {
        const insumos = await insumosServices.getAll();
        res.send(insumos);
    } catch (error) {
        next(error)
    }
}

exports.findInsumoById = async (req,res,next) =>{
    const id = parseInt(req.params.id);
    try {     
        const insumo = await insumosServices.findById(id);
        res.send(insumo);
    } catch (error) {
        next(error);
    }
}