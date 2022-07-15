const express = require('express');
const auth = require('../middleWare/auth')
const router = express.Router();
const usersController = require('../Controller/User');
router.post('/signup', usersController.postSignup);
router.post('/login',usersController.postLogin);
router.get('/profile',[auth],usersController.getDetails);
router.get('/updateUser',[auth],usersController.update);
module.exports = router;