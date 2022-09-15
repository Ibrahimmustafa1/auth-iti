const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let register = async (req, res) => {
    const { email, password, name } = req.body;

    let exsistEmail = await userModel.findOne({ email });
    if (exsistEmail) {
        res.status(400).send('Email already exsist');
    }
    else {
        let user = new userModel({
            email,
            password,
            name
        })
        await user.save();
        res.status(200).send('User created successfully');
    }
}
let login = async (req, res) => {
    const { email, password } = req.body;
    let user = await userModel.findOne({ email });
    const passMatch = await bcrypt.compare(password, user.password)

    if (user && passMatch) {
        res.header('auth-token', jwt.sign({ uder: user._id }, 'secretKey')).send('Login successfully').send({ token });
    }
    else {
        res.status(400).send('User not found');
    }
}
module.exports = { login, register }