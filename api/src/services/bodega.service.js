const PrismaClient = require("@prisma/client").PrismaClient;
const model = new PrismaClient();

exports.getAllInventory = async () =>{
    const inventario = await model.insumosBodega.findMany({include:{insumo:true}});
    return inventario;
}