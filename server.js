const express = require('express');
const bp = require('body-parser');
const db = require('mongoose');
const app = express();

app.listen('3000', () => console.log('server active on 3000'));

app.use(bp.json());
app.use('/', express.static('pages'));
app.use(bp.urlencoded({ extended: false }));

db.connect('mongodb+srv://koren220:koren220@cluster0.bhv7xnm.mongodb.net/SVBurger', () => console.log('db is active'));

const userSchema = db.Schema({
    name: {
        first: String,
        last: String
    },
    email: String,
    password: String
})

const userList = db.model('users', userSchema)
app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/pages/signin.html');
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/pages/signup.html');
})

app.post('/signup', (req, res) => {
    let user = {
        name: {
            first: req.body.fName,
            last: req.body.lName
        },
        email: req.body.emailAdd,
        password: req.body.pass
    }
    addNewUser(user);
    res.sendFile(__dirname + '/pages/signin.html');
})

const addNewUser = async (user) => {
    await userList.insertMany(user);
}

app.post('/validate', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    const lookInDB = async () => {
        let user = await userList.findOne({email: email,password: password});
        res.json(user);
    }
    lookInDB();
    
})

