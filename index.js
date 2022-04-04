const express = require ('express')

const paht = require ('paht')

const app = express ()

app.get('/', (request, response) => {

    response.sendFile(paht.resolve(__dirname, 'index.html'))

})

const port = process.env.port || 3000

console.log({port})

app.listen (port,  function() {
    console.log("servidor escuchando en el puerto", port)

})