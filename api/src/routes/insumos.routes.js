const router = require('express').Router();
const insumoController = require('../controllers/insumos.controller');

router.get('/:id',insumoController.findInsumoById);
router.post('/new',insumoController.addInsumo);


module.exports = router;