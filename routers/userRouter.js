const express = require('express');
const { addUser,SignIn } = require('../controlers/users');
const router = express.Router();

router.post('/addUser',addUser)
router.post('/signin',SignIn)

module.exports = router



