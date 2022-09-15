const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }

})
userSchema.pre('save', async function (req, res, next) {
    console.log(this.password)
    const hash = await bcrypt.hashSync(this.password, 10);
    this.password = hash;
    next();


})

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;