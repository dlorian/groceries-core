require('dotenv').config();

const port = process.env.PORT || 3000;

const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const log = require('./log.js');
const router = require('./router.js');

const dao = require('./src/dao');

const UserService = require('./src/services/user-service.js');
const GroceryService = require('./src/services/grocery-service.js');

const app = express();
// You must use a body parser for JSON before mounting the adapter
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dao.connect()
    .then(daoManager => {
        router.initCRUD(app, 'user', new UserService(daoManager.getDao('user')));
        router.initCRUD(app, 'grocery', new GroceryService(daoManager.getDao('grocery')));
        
        app.listen(port, () => log.info('Express server listening on port %d', port));
    })
    .catch(err => console.error(err));