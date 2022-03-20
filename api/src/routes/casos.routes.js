const router = require('express').Router();
const casosController = require('../controllers/casos.controller')

router.post('/new',casosController.addCaso);

module.exports = router;