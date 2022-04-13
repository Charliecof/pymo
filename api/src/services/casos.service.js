const PrismaClient = require('@prisma/client').PrismaClient;
const model = new PrismaClient();

exports.addOne = async (payload) => {
	payload.mes = new Date(payload.mes);
	const newCaso = await model.casos.create({ data: payload });
	return newCaso;
};

exports.getByHospital = async (idHospital) => {
	const casos = await model.casos.findMany({
		where: { id_hospital: idHospital },
	});
	return casos;
};

exports.getCaseByHospitalAndMonth = async (idHospital, year) => {
	const casos = await model.casos.findMany({
		where: {
			id_hospital: idHospital,
			mes: {
				gte: new Date(`${year}-01-01`),
				lt: new Date(`${year + 1}-01-01`),
			},
		},
		select:{
            hospital: true,
            cantidad: true,
            mes: true
        }
	});

	return casos;
};

exports.getCasosAllByMonth = async (year) => {
	const casos = await model.casos.groupBy({
		by: ['mes'],
		where: {
			mes: {
				gte: new Date(`${year}-01-01`),
				lt: new Date(`${year + 1}-01-01`),
			},
		},
		_sum: {
			cantidad: true,
		},
        orderBy:{
            mes: 'desc'
        }
	});

	return casos;
};
