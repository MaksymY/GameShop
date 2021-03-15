const products = []

module.exports = class Product {
	constructor(g, p) {
		this.game = g;
		this.price = p;
	}

	save() {
		products.push(this);
	}

	static fetchAll() {
		return products
	}
};
