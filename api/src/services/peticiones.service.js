const PrismaClient = require('@prisma/client').PrismaClient;
const model = new PrismaClient();

exports.addOne = async (payload) => {
	const newPeticion = await model.peticiones.create({ data: payload });
	return newPeticion;
};

exports.addPeticionInsumos = async (payload) => {
	const dateValues = payload.casos.mes.split('-', 2);
	const newPeticion = await model.peticiones.create({
		data: {
			id_hospital: payload.hospital,
			date: new Date(dateValues[0], parseInt(dateValues[1]) - 1),
			insumos: {
				create: [...payload.insumos],
			},
		},
	});
	return newPeticion;
};

exports.getByHospital = async (idHospital, year) => {
	const peticiones = await model.peticiones.findMany({
		where: {
			id_hospital: idHospital,
			date: {
				gte: new Date(`${year}-01-01`),
				lt: new Date(`${year + 1}-01-01`),
			},
		},
		include: { insumos: true },
		orderBy: { date: 'asc' },
	});
	return peticiones;
};

exports.getByMesHospital = async (idHospital, year) => {
	const peticiones = await model.peticiones.findMany({
		where: {
			AND: [
				{ id_hospital: idHospital },
				{
					date: {
						gte: new Date(`${year}-01-01`),
						lt: new Date(`${year + 1}-01-01`),
					},
				},
			],
		},
		include: {
			insumos: true,
		},
	});
	return peticiones;
};

exports.getById = async (idPeticion) => {
	const peticion = await model.peticiones.findUnique({
		where: { id: idPeticion },
		include: {
			insumos: true,
		},
	});
	return peticion;
};

exports.getActive = async () => {
	const peticiones = await model.peticiones.findMany({
		where: { active: true },
		include: {
			insumos: {
				include: {
					insumos: true,
				},
			},
			hospital: true,
		},
	});
	return peticiones;
};

exports.aproveById = async (id) => {
	const peticion = await model.peticiones.update({
		where: {
			id: id,
		},
		data: {
			active: false,
		},
	});
	return peticion;
};
