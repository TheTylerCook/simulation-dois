module.exports = {
    create:(req, res) => {
        const dbInstance = req.app.get('db');
        console.log(req.body);
        const { username, password } = req.body;
        
     dbInstance.create_user([username,password])
              .then( () => res.status(200).send() )
              .catch( (err) =>  console.log(err))
    },

    getAll:(req, res) => {
        const dbInstance = req.app.get('db');
        console.log(req.body);
        const { username, password } = req.body;
        
     dbInstance.get_user()
              .then( (users) => res.status(200).send(users) )
              .catch( (err) => res.status(500).send(err) );
    }

    
}