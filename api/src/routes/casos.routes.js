const router = require('express').Router();
const casosController = require('../controllers/casos.controller')

router.get('/graph/',casosController.getAllCasosGraph);
router.get('/graph/:id',casosController.graphHospitalMonthCasos);

router.post('/new',casosController.addCaso);


module.exports = router;