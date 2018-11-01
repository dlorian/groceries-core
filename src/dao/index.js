const UserDAO = require('./user-dao');
const GroceryDAO = require('./grocery-dao');

const mySqlClient = require('./mysql-client');

const dbDaos = {
    grocery: (dbConnection) => {
        return new GroceryDAO(dbConnection)
    },

    user: (dbConnection) => {
        return new UserDAO(dbConnection)
    }
};

const DaoManager = class DaoManager {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    getDao(dao) {
        return dbDaos[dao](this.dbConnection);
    }
};

module.exports = {
    connect: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const dbConnection = await mySqlClient.getConnection();
                resolve(new DaoManager(dbConnection));
            } catch (err) {
                reject(err);
            }
        });
    }
};