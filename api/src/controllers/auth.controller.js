const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authService = require('../services/auth.service');

exports.signUp = async (req, res, next) => {
	const userData = { ...req.body };
	try {
		const hashedPwd = await bcrypt.hash(userData.password, 12);
		userData.password = hashedPwd;
		const newUser = await authService.createUser(userData);
		res.send(newUser);
	} catch (error) {
		next(error);
	}
};

exports.login = async (req, res, next) => {
	const userData = { ...req.body };
	try {
		const user = await authService.findUserByMail(userData.mail);
		const comparePwd = await bcrypt.compare(
			userData.password,
			user.password
		);
		if (comparePwd) {
			const token = jwt.sign(
				{
					userId: user.id,
					name: user.name,
				},
				'pymo',
				{ expiresIn: '2h' }
			);
            res.status(200).send({token:token});
		}
        else{
            throw new Error("Authentication Failed")
        }
	} catch (error) {
		next(error);
	}
};
