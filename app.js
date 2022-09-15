const express = require('express');
const app = express()
const { dbconnection } = require('./dbConnection');
const { login, register } = require('./controller/user.controller');
const auth = require('./authMiddleware');
dbconnection()
app.use(express.json());
app.post('/register', register);
app.post('/login', login);
app.get('/', auth, (req, res) => {
    res.send("This is Toooo Secret")
})

app.listen(3000, () => {
    console.log('Server listening on port 3000!')
})