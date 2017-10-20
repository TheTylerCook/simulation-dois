const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use( session({
    secret: 'Can you see me?',
    resave: false,
    saveUninitialized: false,
    
}))

app.listen( PORT, () => { console.log(`Server listening on port ${PORT}.`); } );