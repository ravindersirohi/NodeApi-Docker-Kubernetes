class BaseModel {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Product extends BaseModel {
    constructor(id, name, price) {
        super(id, name);
        this.price = price;
    }
}

module.exports = { Product: Product }