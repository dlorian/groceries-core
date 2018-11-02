const grocery = require('./typedefs/grocery');

module.exports = class GroceryDAO {
    constructor(dbConnection) {
        this.Grocery = dbConnection.createModel('grocery', grocery);

        this.Grocery.sync({ force: true })
            .then(() => {
                this.Grocery.create({
                    name: 'Milch',
                    amount: 1
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    async persist(data) {
        return this.Grocery.create(data);
    }

    async findAll() {
        return this.Grocery.findAll();
    }

    async findById(id) {
        return this.Grocery.findById(id);
    }
}

