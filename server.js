const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors())
const knex = require('knex');
const register = require('./controllers/register')
const signIn = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'Brian',
    password : '',
    database : 'facial-recog'
  }
});

app.get('/', (req, res) => {
	res.send(database.users)
})

app.post('/signin', signIn.handleSiginIn(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.get('/profile/:id', profile.handleProfileGet(db));
app.put('/image', image.handleImage(db));
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res)});

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Listeninig to ${PORT}`);
})

/*
/ res will say this is working
/ sign in will be a POST request and respond with success or failure.
/ register will be a POST request and will respond will new user
/ profile/:userId each user will have their own home screen. It will be a GET request.
/ image endpoint that will PUT/update their ranking / user object.
*/