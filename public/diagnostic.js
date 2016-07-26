/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)

// import Ember from 'ember';

const Order = Ember.Object.extend({
  orderPrice: Ember.computed('price', 'quantity', function(){
  return this.get('price') * this.get('quantity');
  })
});

const Cart = Ember.Object.extend({
  addToCart: function(item){
    this.orders.push(item);
    return this.get('orders');
  },
  orders: [],
  totalPrice: Ember.computed('orders', function(){
    let orders = this.get('orders');
    return orders.reduce((prev, curr) => {
      return prev + curr.get('orderPrice');
    },0);
  })
});

let exampleCart = Cart.create({
  orders:[
    Order.create(
      {
        item: 'hat',
        price: 5,
        quantity: 2
      }
    ),
    Order.create(
      {
        item: 'desk lamp',
        price: 20,
        quantity: 1
      }
    ),
    Order.create(
      {
        item: 'hand towels',
        price: 8,
        quantity: 3
      }
    )
  ]
});

console.log('example cart: ', exampleCart);
console.log('example cart orders: ', exampleCart.get('orders'));
console.log('example cart first order: ', exampleCart.get('orders')[0]);
console.log('example cart first order price: ', exampleCart.get('orders')[0].get('orderPrice'));
console.log('example cart total price: ', exampleCart.get('totalPrice'));
