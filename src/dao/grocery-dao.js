const grocery = require('./typedefs/grocery');

module.exports = class GroceryDAO {
    constructor(dbConnection) {
        this.Grocery = dbConnection.createModel('grocery', grocery);

        this.Grocery.sync({
            force: true
        }
        ).then(() => {
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

