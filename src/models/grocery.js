module.exports = class Grocery {
    constructor({ id, name, amount = 1, createdBy, createdAt }) {
        if (!name) {
            throw new Error('Name is required');
        }

        this.id = id;
        this.name = name;
        this.amount = amount;
        this.createdBy = createdBy;
        this.createdAt = createdAt || new Date().toISOString();
    }

    toString() {
        return `Grocery[${this.name}, ${this.amount}, ${this.addedBy}, ${this.addedAt}]`;
    }
}