const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const { route } = require('./hospital.routes');

router.post('/logIn',authController.login);
router.post('/signUp',authController.signUp);


module.exports = router;