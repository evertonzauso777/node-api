require('dotenv').config();

const fs = require('fs');
const https = require('https');

var express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_MONGODB;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var port = 8080;
const routes = require('./routes/routes');

app.use('/api', routes);

const options = {
    key: fs.readFileSync("certificado.key"),
    cert: fs.readFileSync("certificado.cert")
  };


https.createServer(options, app).listen(port);
// app.listen(port);

// console.log('conectado a porta' + " " + port);