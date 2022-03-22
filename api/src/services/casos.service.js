const PrismaClient = require("@prisma/client").PrismaClient;
const model = new PrismaClient();

exports.addOne = async (payload) =>{
    payload.mes = new Date(payload.mes)
    const newCaso = await model.casos.create({data:payload});
    return newCaso;
}

exports.getByHospital = async (idHospital) =>{
    const casos = await model.casos.findMany({where:{id_hospital:idHospital}});
    return casos;
}

