const Sequelize = require("sequelize");

module.exports = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
}