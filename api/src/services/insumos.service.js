const PrismaClient = require('@prisma/client').PrismaClient;
const model = new PrismaClient();

exports.addOne = async (payload) =>{
    const insumo = await model.insumos.create({data:payload});
    return insumo;
}

exports.findById = async (id) =>{
    const insumo = await model.insumos.findUnique({where:{id:id}});
    return insumo;
}