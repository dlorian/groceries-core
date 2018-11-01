module.exports = class User {
    constructor(options) {
        this.userName = options.userName;
        this.firstName = options.firstName;
        this.lastName = options.lastName;
    }

    getUserName() {
        return this.userName;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    toString() {
        return `User[${this.userName}, ${this.getName()}]`;
    }
}