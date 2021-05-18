const cors = require('cors');
const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Middlewares
        this.middlewares();
        
        //Routes
        this.routes(); 
    }    
    middlewares() {
        //directory public
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json());      
    }
    routes() {
        this.app.use('/', require('../routes/user.routes'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('server on port', this.port);
        });
    }
}

module.exports = Server;