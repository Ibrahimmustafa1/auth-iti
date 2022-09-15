const mongoose = require('mongoose');
let dbconnection = () => {
    mongoose.connect('mongodb://localhost:27017/authITI', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('connected to db');
    }).catch((err) => {
        console.log(err);
    })

}
module.exports = { dbconnection };