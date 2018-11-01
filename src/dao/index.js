const DBStub = require("./db-stub");

const GroceryDAO = require('./grocery-dao');

const useDbStub = process.env.USE_DB_STUB;

const mySqlClient = require('./mysql-client');

const stubs = {
    grocery: () => new DBStub('groceries'),
    user: () => new DBStub('users')
};

const dbDaos = {
    grocery: (dbConnection) => {
        return new GroceryDAO(dbConnection)
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