const express = require('express')
const app = express()
const port = 3000

const parameters = require('./parameters');

app.get('/', (req, res) => {
    parameters.helloworldJSON.statement = 'Hello world';
    parameters.helloworldJSON.author = 'Tech With Us PVT LTD';

    res.send(parameters.helloworldJSON);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})