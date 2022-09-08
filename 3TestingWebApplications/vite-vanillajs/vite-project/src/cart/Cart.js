export default class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items.push(item);
  }

  removeFromCart(item) {
    const filteredArray = this.items.filter(it => it !== item);
    this.items = filteredArray;
  }
}
