const router = require('express').Router();
const peticionesController = require('../controllers/peticiones.controller');

router.get('/:id',peticionesController.getPeticion);

router.post('/new',peticionesController.createPeticion);

module.exports = router;