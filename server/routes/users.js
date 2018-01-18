const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/usersController')
const authentication = require('../middleware/authentication')
// Create User
router.post('/', UsersController.createUser)

//  User Login
router.post('/login', UsersController.login)

// Get USer by ID
router.get('/:id', UsersController.getUserById)

// Edit User
router.put('/:id',  authentication,  UsersController.updateUser)

// Create User
router.delete('/:id',UsersController.deleteUser)

module.exports = router;
