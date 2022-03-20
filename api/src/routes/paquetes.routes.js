const router = require('express').Router();
const paquetesControler = require('../controllers/paquetes.controller');


router.post('/new',paquetesControler.addPaquete);


module.exports = router;