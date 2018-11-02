
module.exports = class DbConnection {
    constructor(sequelize) {
        this.sequelize = sequelize;
    }

    createModel(name, typeDefinition) {
        return this.sequelize.define(name, typeDefinition, { version: true });
    }

    sequelize() {
        return this.sequelize;
    }
};
