const user = require("./typedefs/user");

module.exports = class UserDAO {
    constructor(dbConnection) {
        this.User = dbConnection.createModel('user', user);

        this.User.sync({ force: true })
            .then(() => {
                this.User.create({
                    userName: 'flo',
                    firstName: 'Florian',
                    lastName: 'Dorau'
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    async persist(data) {
        return this.User.create(data);
    }

    async findAll() {
        return this.User.findAll();
    }

    async findById(id) {
        return this.User.findById(id);
    }
};