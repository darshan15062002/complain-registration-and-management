const mongoose = require('mongoose')
const validator = require('validator')
const bcriptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'please enter email ID']
    },
    password: {
        type: String,
        required: [true, 'please enter password'],

    },
    resetPasswordToken: String,
    resetPasswordExpire: String
})

adminUserSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SCREAT, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

adminUserSchema.methods.compairPassword = async function (enterPassword) {
    return compare(enterPassword, this.password)
}
module.exports = mongoose.model("AdminUser", adminUserSchema)