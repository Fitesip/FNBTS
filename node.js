const { error } = require('console');
const express = require('express');
const fs = require('fs')
const path = require('path');

const PORT = 3000;
const app = express();

const createPath = (page) => path.resolve(__dirname, `${page}.html`);
const urlencodedParser = express.urlencoded({extended: false});

app.listen(PORT, 'localhost', (error) => {
    error ? console.log(error): console.log(`Сервер запущен по адресу http://localhost:${PORT}`)
})

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

app.post('/', urlencodedParser, (req, res) => {
    if(!req.body) return response.sendStatus(400);
    createFile(req.body);
})

function createFile(data){
    console.log(JSON.stringify(data));
    fs.writeFileSync("form_data.json", JSON.stringify(data), (error) => {
        if(error) {return console.log(error)}
        else {console.log('Done')}
    })
}

