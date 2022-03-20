const PrismaClient = require("@prisma/client").PrismaClient;
const model = new PrismaClient();

exports.addOne = async (payload) => {
    const hospital = await model.hospital.create({data:payload});
	return hospital;
};

exports.getAll = async () => {
	const hospitals = await model.hospital.findMany();
	return hospitals;
};

exports.getById = async (id) => {
	const hospital = await model.hospital.findUnique({ where: { id: id } });
    return hospital;
};

exports.add