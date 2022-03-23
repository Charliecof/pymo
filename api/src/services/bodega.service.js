const PrismaClient = require("@prisma/client").PrismaClient;
const model = new PrismaClient();

exports.getAllInventory = async () =>{
    const inventario = await model.insumosBodega.findMany({include:{insumo:true}});
    return inventario;
}

exports.updateCantidad = async (id,cantidad)=>{
    const bodega = await model.insumosBodega.updateMany({
        where:{
            id_insumo: id
        },
        data:{
            cantidad: {
                decrement: cantidad
            }
        }
    });
    return bodega;
}