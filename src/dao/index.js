const db = require('../db');

const DaoManager = require('./dao-manager');

module.exports = {
    connect: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const dbConnection = await db.getConnection();
                resolve(new DaoManager(dbConnection));
            } catch (err) {
                reject(err);
            }
        });
    }
};