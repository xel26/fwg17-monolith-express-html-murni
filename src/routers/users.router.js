const userRouter = require('express').Router()

const userController = require('../controllers/users.controller')

userRouter.get('/', userController.listAllUsers)

userRouter.get('/add-new-user', (req, res) => {
    return res.render('users/add-new-user', {title: "Add New User"})
})

userRouter.post('/add-new-user', userController.addUser)

userRouter.get('/:id', userController.detailUser)
userRouter.post('/:id', userController.editUser)
userRouter.delete('/:id', userController.deleteUser)

module.exports = userRouter