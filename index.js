const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const controller = require('./server/controllers/auth_controller')
const PORT = 4444;

require('dotenv').config();
const app = express();
app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING ).then( dbInstance => { 
    
    app.set('db', dbInstance)});



app.use( session({
    secret: 'Can you see me?',
    resave: false,
    saveUninitialized: false
    
}))


app.post('/api/users', controller.create)
app.get('/api/users', controller.getAll)



app.listen( PORT, () =>  console.log(`Server listening on port ${PORT}.`)  )