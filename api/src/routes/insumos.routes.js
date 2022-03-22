const router = require('express').Router();
const insumoController = require('../controllers/insumos.controller');
const { route } = require('./hospital.routes');

router.get('/',insumoController.getInsumos);
router.get('/:id',insumoController.findInsumoById);
router.post('/new',insumoController.addInsumo);


module.exports = router;