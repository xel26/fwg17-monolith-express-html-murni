const userRouter = require('express').Router()

const userController = require('../controllers/users.controller')

userRouter.get('/', userController.listAllUsers)
userRouter.get('/:id', userController.detailUser)
userRouter.post('/:id', userController.editUser)
userRouter.delete('/:id', userController.deleteUser)

module.exports = userRouter