const bodegaServices = require('../services/bodega.service');

exports.getInventory = async(req,res,next) =>{
    try {
        const inventario = await bodegaServices.getAllInventory();
        const chartData = inventario.map(item =>{
            return{
                insumo: item.insumo.nombre,
                cantidad: item.cantidad
            }
        }) 
        res.send(chartData);
    } catch (error) {
        next(error);
    }
}