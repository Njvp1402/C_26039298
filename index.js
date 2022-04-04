const express = require ('express')

const paht = require ('paht')

const app = express ()

app.get('/', (request, response) => {

    response.sendFile(paht.resolve(__dirname, 'index.html'))

})

app.listen (5500)