const hospitalServices = require('../services/hospital.service');

exports.getHospital = async (req,res,next)=>{
    try{
        const hospitals = await hospitalServices.getAll();
        res.send(hospitals);
    }
    catch (error){
        next(error);
    }
}

exports.getHospitalById = async (req,res,next)=>{
    const id = parseInt(req.params.id);
    try {
        const hospital = await hospitalServices.getById(id);
        res.send(hospital);
    } catch (error) {
        next(error);
    }
}

exports.addHospital = async (req,res,next) =>{
    const payload = req.body;
    try {
        const newHospital = await hospitalServices.addOne(payload);
        res.send({hospital:newHospital});
    } catch (error) {
        next(error);
    }
}