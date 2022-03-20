const PrismaClient = require("@prisma/client").PrismaClient;
const model = new PrismaClient();

exports.addOne = async (payload) => {
	const newPeticion = await model.peticiones.create({ data: payload });
	return newPeticion;
};

exports.getByHospital = async (idHospital) => {
	const peticiones = await model.peticiones.findMany({
		where: { id_hospital: idHospital },
		include: { insumos },
	});
    return peticiones;
};

exports.getById = async (idPeticion) =>{
    const peticion = await model.peticiones.findUnique({where:{id:idPeticion}});
    return peticion;
}
