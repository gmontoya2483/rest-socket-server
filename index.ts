import Server from "./classes/server";
const mensajes = require("./routes/router.route");

import bodyParser from 'body-parser';
import cors from 'cors'


const server = new Server();

// BodyParser
server.app.use( bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());

// CORS
server.app.use( cors({
   origin: true,
   credentials: true
}));


// Routes
server.app.use('/mensajes', mensajes)



server.start( () => {
   console.log(`Server running on port ${ server.port }`);
});
