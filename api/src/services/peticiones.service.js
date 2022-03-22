const PrismaClient = require('@prisma/client').PrismaClient;
const model = new PrismaClient();

exports.addOne = async (payload) => {
	const newPeticion = await model.peticiones.create({ data: payload });
	return newPeticion;
};

exports.addPeticionInsumos = async (payload) => {
	const newPeticion = await model.peticiones.create({
		data: {
			id_hospital: payload.hospital,
			date: new Date(),
			insumos: {
				create: [...payload.insumos],
			},
		},
	});
	return newPeticion;
};

exports.getByHospital = async (idHospital) => {
	const peticiones = await model.peticiones.findMany({
		where: { id_hospital: idHospital },
		include: { insumos },
	});
	return peticiones;
};

exports.getByMesHospital = async (idHospital) =>{
	const peticiones = await model.peticiones.findMany({
		where: {
			AND:[
				{id_hospital: idHospital},
				{date:{
					gte: new Date('2020-01-01'),
					lt: new Date('2022-01-01')
				}}
			]
		},
		include:{ 
			insumos: true
		}
	})
	return peticiones;
}

exports.getById = async (idPeticion) => {
	const peticion = await model.peticiones.findUnique({
		where: { id: idPeticion },
		include:{
			insumos: true
		}
	});
	return peticion;
};

exports.getActive = async () => {
	const peticiones = await model.peticiones.findMany({
		where: { active: true },
		include: {
			insumos: true,
		},
	});
	return peticiones;
};

exports.aproveById = async (id)=>{
	const peticion =  await model.peticiones.update({
		where:{
			id: id
		},
		data:{
			active: false
		}
	});
	return peticion;
}

/* exports.getBy = async (anio)=>{
	const peticiones = await model.peticiones.groupBy({
		by:['id_hospital','active','date'],
	});
	return peticiones;
}
 */