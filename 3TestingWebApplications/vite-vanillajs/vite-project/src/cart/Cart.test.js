import Cart from './Cart';

describe('My Cart tests', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test("The addToCart function can add an item to the cart", () => {
    cart.addToCart('cheesecake');
    expect(cart.items[0]).toEqual('cheesecake');
  });

  test("The removeFromCart function can remove an item from the cart", () => {
    cart.addToCart('cheesecake');
    cart.removeFromCart('cheesecake');
    expect(cart.items).toEqual([]);
  });
})

