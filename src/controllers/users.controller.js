const userModel = require("../models/users.model")
const moment = require('moment')

exports.listAllUsers = async (req, res)=>{
    const users = await userModel.findAllUsers()
    return res.render('users/index', {title: "List Users", userData: users})
}

exports.detailUser = async (req, res)=>{
    const user = await userModel.findOneUser(req.params.id)
    return res.render('users/detail', {title: "Detail Users", user, moment})
}

exports.editUser = async (req, res)=>{
    await userModel.updateUser(req.params.id, req.body)
    console.log(req.body)
    return res.redirect("/users")
}

exports.deleteUser = async (req, res)=>{
    const deleted = await userModel.deleteUser(req.params.id)
    return res.json({
        success: true,
        message: "Delete success",
        results: deleted
    })
}