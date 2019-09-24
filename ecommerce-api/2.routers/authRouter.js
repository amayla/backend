var express =require('express')
var router = express.Router()
const {authController} = require('../1.controllers')

router.get('/login', authController.login)
router.get('/getuser', authController.getUser)
router.post('/postuser', authController.postUser)

module.exports = router