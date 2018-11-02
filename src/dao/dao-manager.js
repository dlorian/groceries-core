const UserDAO = require('./user-dao');
const GroceryDAO = require('./grocery-dao');

const registry = {
    user: (dbConnection) => new UserDAO(dbConnection),
    grocery: (dbConnection) => new GroceryDAO(dbConnection)
};

module.exports = class DaoManager {

    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    getDao(dao) {
        return registry[dao](this.dbConnection);
    }
};