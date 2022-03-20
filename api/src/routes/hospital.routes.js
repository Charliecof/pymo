const router = require('express').Router();
const hospitalController = require('../controllers/hospital.controller');
const peticionesController = require('../controllers/peticiones.controller');
const paquetesControler = require('../controllers/paquetes.controller');
const casosController = require('../controllers/casos.controller');

router.get('/',hospitalController.getHospital);
router.get('/casos/:id',casosController.getCasosHospital);
router.get('/peticiones/:id',peticionesController.getPeticionesHostpital);
router.get('/paquetes/:id',paquetesControler.getPaquetesHospital);
router.get('/:id',hospitalController.getHospitalById);

router.post('/new',hospitalController.addHospital);

module.exports = router;