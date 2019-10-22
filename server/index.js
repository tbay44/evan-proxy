const express = require('express');
const path = require('path')
const HTML = path.join(__dirname, '../client')
const app = express();
const port = 3099;

app.use(express.static(HTML));

app.get('/', (req, res) =>{
    res.send(HTML);
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});