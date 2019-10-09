let userController = require('../controllers/userController')
let router = require('express').Router()

router.get('/getall', userController.getAllUsers)
router.get('/getbyid', userController.getUserById)

module.exports = router