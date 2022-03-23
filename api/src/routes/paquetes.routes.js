const router = require('express').Router();
const paquetesControler = require('../controllers/paquetes.controller');

router.get('/graph/:id',paquetesControler.paquetesGraph);

router.post('/new',paquetesControler.addPaquete);


module.exports = router;