const http = require('http');
const getCharByid = require('./controllers/getCharByid');


const PORT = 3001;

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.url.includes('rickandmorty/character')){
    const id = req.url.split('/').pop(); 
    return getCharByid(res, id)
    }
    if(req.url.includes('detail')){
        getCharDetail(res,id)
    }
   
    
})
.listen(PORT,() => console.log('Port on 3001'));