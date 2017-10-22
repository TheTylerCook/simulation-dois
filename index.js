const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    massive = require('massive'),
    controller = require('./server/controllers/auth_controller'),
    PORT = 4444,
    checkForSession = require('./server/middlewares/checkForSession')



require('dotenv').config();
const app = express();
app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING).then(dbInstance => {

    app.set('db', dbInstance)
});
//Middelware
app.use(checkForSession);


app.use(session({
    secret: 'Can you see me?',
    resave: false,
    saveUninitialized: false

}))


app.post('/api/users', controller.create)
app.get('/api/users', controller.getAll)



app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`))