const server = require('../src/app')
const PORT = 3001


server.listen(PORT, () => console.log('Server raised in port: ' + PORT))

  

// const router = require('./routes') // no es necesario el index.js
// const cors = require('cors')
// const morgan = require('morgan')


// server.use(cors())

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//         );
//         res.header(
//             'Access-Control-Allow-Methods',
//             'GET, POST, OPTIONS, PUT, DELETE'
//             );
//             next();
//         });

// server.use(express.json()) // si me pasan info por body 
// server.use(morgan('dev'))  // me permite ver la request( ----> npm i morgan)
// server.use('/rickandmorty', router)
        









//Nota:
