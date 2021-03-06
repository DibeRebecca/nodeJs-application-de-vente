const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path=require('path');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
mongoose.connect('mongodb://localhost/fullstack', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connexion reussie');
}).catch(() => {
    console.log('connexion echouée')
})

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/stuff/', stuffRoutes);

app.use('/api/auth/', userRoutes);




module.exports = app;