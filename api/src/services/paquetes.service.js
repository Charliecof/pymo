const PrismaClient = require("@prisma/client").PrismaClient;
const model = new PrismaClient();

exports.addOne = async (payload) =>{
    const paquete = await model.paquetes.create({data:payload});
    return paquete;
}

exports.addPaquete = async (payload) =>{
    const newPaquete = await model.paquetes.create({
        data:{
            id_hospital: payload.id_hospital,
            delivery_date: new Date(),
            insumos:{
                create: [...payload.insumos]
            }
        }
    });
    return newPaquete;
}

exports.getByHospitall = async (idHospital) =>{
    const paquetes = await model.paquetes.findMany({where:{id_hospital:idHospital},include:{insumos}});
    return paquetes;
}