require('dotenv').config();

const port = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');

const log = require('./log.js');
const routes = require('./routes.js');

const dao = require('./src/dao');

const GroceryService = require('./src/services/grocery-service.js');

const app = express();
// You must use a body parser for JSON before mounting the adapter
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dao.connect()
    .then(daoManager => {
        const groceryService = new GroceryService(daoManager.getDao('grocery'));
        routes.init(app, groceryService);

        const server = app.listen(port, () => {
            log.info('Express server listening on port %d', port);
        });
    })
    .catch(err => console.error(err));