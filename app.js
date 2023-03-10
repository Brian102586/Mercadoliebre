const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

const port = process.env.PORT || 3002;
app.listen(port, () => { console.log('Servidor arrancando en el puerto 3002') });

app.get('/', (req, res) => { 
    res.sendFile(path.resolve(__dirname, './views/home.html'));
 });