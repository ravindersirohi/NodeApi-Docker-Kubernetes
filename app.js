const express = require('express');
const app = express();

//Routes
const productRoutes = require('./routes/products');

app.use('/products', productRoutes);

//Default
app.use('/', (req, resp) => {
    resp.status(200).send('Node express API running in Docker and Kubernetes!');
});

module.exports = app;