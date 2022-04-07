const monthNames = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Augosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];
exports.dateToMonthString = (date) => {
	return monthNames[date.getMonth()];
};
