const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post("/signUp",userController.signUpUser);

router.post("/signIn",userController.signInUser);

module.exports = router;