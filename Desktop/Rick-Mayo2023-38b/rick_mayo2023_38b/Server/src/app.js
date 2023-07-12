const router = require('./routes') // no es necesario el index.js
const express = require('express');
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, DELETE'
            );
            next();
        });
        
        app.use(express.json()) 
        app.use(morgan('dev'))
        app.use('/rickandmorty', router)
        // si me pasan info por body app.use(morgan('dev'))  // me permite ver la request( ----> npm i morgan)app.use('/rickandmorty', router)
        module.exports= app

