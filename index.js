require('dotenv').config();

const Server = require('./models/server.js');

const server = new Server()

server.listen();

//Middlewares para parsear el body de una petición
//app.use(express.urlencoded({ extended: true }));

//app.get('/', (req, res) => res.status(200).json({ message: 'Hola Mundo'}));

//console.log(process.env.NODE_ENV);
//En package.json tuve un error que no vi en la clase, donde tenía que agregar en scripts: "NODE_ENV=development nodemon index.js" por "set NODE_ENV=development && nodemon index.js"