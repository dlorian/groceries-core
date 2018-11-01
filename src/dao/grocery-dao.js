const Sequelize = require("sequelize");

const _init = (sequelize) => {
    console.log('Init GroceryDAO')
    return sequelize.define('grocery', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.INTEGER
        }
    });
};

module.exports = class GroceryDAO {
    constructor(dbConnection) {
        this.Grocery = _init(dbConnection.sequelize);

        this.Grocery.sync({
            force: true
        }
        ).then((result) => {
            this.Grocery.create({
                name: 'Milch',
                amount: 1
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    
    async persist(data) {
        return this._Grocery().create(data);
    }

    async findAll() {
        return this._Grocery().findAll();
    }

    async findById(id) {
        return this._Grocery().findById(id);
    }

    _Grocery() {
        return this.Grocery;
    }
}

