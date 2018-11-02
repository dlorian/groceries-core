const Sequelize = require("sequelize");

const DbConnection = require('./db-connection');

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;

const _connectDB = () => {
    return new Sequelize(dbName, dbUser, dbPass, {
        host: dbHost,
        dialect: "mysql",
        port: dbPort
    });
}

const connect = () => {
    return new Promise((resolve, reject) => {
        const sequelize = _connectDB();
        

        sequelize
            .authenticate()
            .then(() => {
                console.dir("Authentication successfully.");
                resolve(new DbConnection(sequelize));
            })
            .catch(err => {
                reject(new Error(err));
            });
    });
};

let connection = null;
const getConnection = () => {
    return new Promise((resolve, reject) => {
        if (!connection) {
            console.log("No connection defined. Connect to DB");
            connect()
                .then(dbConnection => {
                    connection = dbConnection;
                    console.dir("Connection has been established successfully.");
                    resolve(connection);
                })
                .catch(err => {
                    console.error("Unable to connect to the database:", err);
                    reject(err);
                });
        } else {
            console.log("Connection defined. Reuse existing connection");
            resolve(connection);
        }
    });
};

module.exports = { getConnection };
