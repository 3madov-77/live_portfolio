'use strict'

const express = require('express');

const server = express();

const PORT = process.env.PORT || 4444;
server.use(express.static('./public'))



server.listen(PORT, ()=>{
    console.log('your Port is:', PORT);
})

server.get('/data', (request, response) =>{
    response.send('Heloo World...')

})

// edit