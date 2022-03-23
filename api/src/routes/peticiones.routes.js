const router = require('express').Router();
const peticionesController = require('../controllers/peticiones.controller');

router.get('/active',peticionesController.getActive);
router.get('/graph/:id',peticionesController.peticionesGraph)
router.get('/accept/:id',peticionesController.acceptPeticion);
router.get('/:id',peticionesController.getPeticion);

router.post('/new',peticionesController.createPeticion);

module.exports = router;