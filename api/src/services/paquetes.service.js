const PrismaClient = require('@prisma/client').PrismaClient;
const model = new PrismaClient();

exports.addOne = async (payload) => {
	const paquete = await model.paquetes.create({ data: payload });
	return paquete;
};

exports.addPaquete = async (payload) => {
	const newPaquete = await model.paquetes.create({
		data: {
			id_hospital: payload.id_hospital,
			delivery_date: new Date(),
			insumos: {
				create: [...payload.insumos],
			},
		},
	});
	return newPaquete;
};

exports.getByHospital = async (idHospital,year) => {
	const paquetes = await model.paquetes.findMany({
		where: { id_hospital: idHospital, delivery_date:{
			gte: new Date(`${year}-01-01`),
			lt: new Date(`${year+1}-01-01`)
		} },
		include: { insumos: true },
		orderBy: { delivery_date: 'asc' }
	});
	return paquetes;
};

exports.getByMesByHospital = async (idHospital) => {
	const paquetes = await model.paquetes.findMany({
		where: {
			AND: [
				{ id_hospital: idHospital },
				{
					delivery_date: {
						gte: new Date('2020-01-01'),
						lt: new Date('2022-01-01'),
					},
				},
			],
		},
	});
};
