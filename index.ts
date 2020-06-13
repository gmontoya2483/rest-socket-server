import bodyParser from 'body-parser';
import cors from 'cors'
// Importar Servidor
import Server from "./classes/server";
// Importar Rutas
import mensajes from "./routes/router.route";


const server = Server.instance;

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
