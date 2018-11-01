const log = require('../../log.js');

const data = {
    users: [{
        userName: 'flo',
        firstName: 'Florian',
        lastName: 'Dorau'
    }],
    groceries: [{
        name: 'Milk',
        amount: 1,
        addedBy: 'flo',
        addedAt: ''
    }]
};

module.exports = class DBStub {
    constructor(collection) {
        log.debug(`Creating DBStub for collection '${collection}'`);
        this.collection = collection;
    }

    findAll() {
        log.info('find all data');
        return Promise.resolve(data[this.collection]);
    };
    
    findById(id) {
        log.info(`find data by id:{}`, id);
        return Promise.reject(new Error('Not yet supported'));
    };
    
    persist(item) {
        log.info(`persisting data:{}`, item);
        data[this.collection].push(item);
        return Promise.resolve(item);
    };
    
    deleteById(id) {
        log.info(`delete data with id:{}`, id);
        return Promise.reject(new Error('Not yet supported'));
    };
};