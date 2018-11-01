const Grocery = require('../models/grocery.js');

module.exports = class GroceryService {
    constructor(dao) {
        this.dao = dao;
    }

    _createGrocery(data) {
        return new Grocery(data);
    };

    async findAll() {
        const groceries = await this.dao.findAll();
        return groceries.map(el => this._createGrocery(el));
    };

    async findById(id) {
        const grocery = await this.dao.findById(id);
        return !grocery ? null : this._createGrocery(grocery);
    };

    async add(data) {
        const grocery = this._createGrocery(data);
        return this.dao.persist(grocery);
    };

    async delete(id) {
        return this.dao.deleteById(id);
    };
}