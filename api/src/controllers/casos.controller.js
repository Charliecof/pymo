const casosServices = require('../services/casos.service');
const dateUtils = require('../utils/DateUtils');

exports.addCaso = async (req, res, next) => {
	const payload = req.body;
	try {
		const caso = await casosServices.addOne(payload);
		res.send(caso);
	} catch (error) {
		next(error);
	}
};

exports.getCasosHospital = async (req, res, next) => {
	const id = req.paramas.id;
	try {
		const casos = await casosServices.getByHospital(id);
		res.send(casos);
	} catch (error) {
		next(error);
	}
};

exports.getAllCasosGraph = async (req, res, next) => {
	const year = parseInt(req.query.year);
	try {
		const casosData = await casosServices.getCasosAllByMonth(year);
        const casosGraphData = casosData.map(element=>{
            return{
                mes: dateUtils.dateToMonthString(element.mes),
                cantidad: element._sum.cantidad
            }
        })
		res.send(casosGraphData);
	} catch (error) {
		next(error);
	}
};

exports.graphHospitalMonthCasos = async (req, res, next) => {
	const id = parseInt(req.params.id);
	const year = parseInt(req.query.year);
	try {
		const casosData = await casosServices.getCaseByHospitalAndMonth(
			id,
			year
		);
        if(casosData.length===0) return res.send([]);
        const graphData = casosData.map(element =>{
            return {
                mes: dateUtils.dateToMonthString(element.mes),
                cantidad: element.cantidad
            }
        });
		res.send(graphData);
	} catch (error) {
		next(error);
	}
};
