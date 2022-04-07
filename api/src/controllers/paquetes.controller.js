const paquetesServices = require('../services/paquetes.service');
const dateUtils = require('../utils/DateUtils');
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
        const paquetes = paquetesServices.getByHospital(id);
        res.send(paquetes);
    } catch (error) {
        next(error);
    }
}

exports.paquetesGraph = async (req,res,next) =>{
    const year = parseInt(req.query.year);
    const id = parseInt(req.params.id);
    try {
        const paquetes = await paquetesServices.getByHospital(id,year);
        if(paquetes.length===0) return res.send([]);
        const cubrebocas = paquetes.map(paq=>{
            return{
                x: dateUtils.dateToMonthString(paq.delivery_date),
                y: paq.insumos[0].cantidad
            }
        });
        const caretas = paquetes.map(paq =>{
            return{
                x: dateUtils.dateToMonthString(paq.delivery_date),
                y: paq.insumos[1].cantidad
            }
        });
        const lentes = paquetes.map(paq =>{
            return{
                x: dateUtils.dateToMonthString(paq.delivery_date),
                y: paq.insumos[2].cantidad
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