const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization ');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, DELETE, POST, Patch, OPTIONS');
    next();
});
app.use(bodyParser.json());
app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
        message: 'requete post reussie'
    });
});
app.use('/api/stuff', (req, res, next) => {
    const stuff = [{
        _id: 'rebecca',
        title: 'rebecca',
        imageUrl: 'https://pixabay.com/photos/lemon-tree-fruit-drip-water-dew-5435158/',
        description: 'rebecca',
        price: '2000',
        userId: 'rebecca',
    }, {
        _id: 'rebecca',
        title: 'rebecca2',
        imageUrl: 'https://pixabay.com/photos/lemon-tree-fruit-drip-water-dew-5435158/',
        description: 'rebecca2',
        price: '5000',
        userId: 'rebecca',
    }];
    res.status(200).json(stuff);
    next();
})
module.exports = app;