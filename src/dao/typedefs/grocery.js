const Sequelize = require("sequelize");

module.exports = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4 ,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlphanumeric: true
        }
    },
    amount: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
};