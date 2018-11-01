const User = require('../models/user.js');

module.exports = class UserService {
    constructor(dao) {
        this.dao = dao;
    }

    _createUser(data) {
        return new User(data);
    };

    async findAll() {
        const users = await this.dao.findAll();
        return users.map(el => this._createUser(el));
    };

    async findById(id) {
        const user = await this.dao.findById(id);
        return !user ? null : this._createUser(user);
    };

    async add(data) {
        const user = this._createUser(user);
        return this.dao.persist(user);
    };

    async delete(id) {
        return this.dao.deleteById(id);
    };
}