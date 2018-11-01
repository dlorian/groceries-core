const dao = require('./../dao').init('user');

const User = require('../models/user.js');

const findAll = async function() {
    const groceries = dao.findAll();
    groceries.map(el => new Grocery)
};

const findById = async function(id) {
    return dao.findById(id);
};

const create = async function(options) {
    const user = new User(options);
    return dao.persist(user);
};

module.exports = { findById, create };