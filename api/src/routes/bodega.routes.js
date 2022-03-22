const router = require('express').Router();
const bodegaController = require('../controllers/bodega.controller');
const { route } = require('./hospital.routes');

router.get('/',bodegaController.getInventory);

module.exports = router