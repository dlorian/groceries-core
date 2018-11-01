module.exports = class User {
    
    constructor(data) {
        this.id = data.id;
        this.userName = data.userName;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
    }

    getUserName() {
        return this.userName;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    toString() {
        return `User[${this.id}, ${this.userName}, ${this.getName()}]`;
    }
}