import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Cart} from '../../model/cart';
import {OrderProduct} from '../../model/orderProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart: Cart = {
    orderProducts: [] = new Array<OrderProduct>(),
    quantityOfItems: 0,
    totalPrice: 0
  };

  constructor() {
  }

  private cartData$ = new BehaviorSubject<Cart>(this.cart);
  cartDataChanged$ = this.cartData$.asObservable();


  addToCart(food): void {
    const item = new OrderProduct();
    item.product = food;
    item.quantity = 1;
    const product = this.cart.orderProducts.find(p => p.product.name === item.product.name);

    if (product !== undefined){

      product.quantity++;

    } else {
      item.quantity = item.quantity++;

      this.cart.orderProducts.push(item);
    }
    this.setQuantityOfItems();
    this.setTotalPrice();
  }

  setQuantityOfItems() {
    if (this.cart.orderProducts.length === 1){
      this.cart.orderProducts.find(p => this.cart.quantityOfItems = p.quantity);
      return this.cart.quantityOfItems;
    }
    this.cart.orderProducts.map(a => a.quantity).reduce((a, b) => {
      const quantity = a + b;
      console.log(quantity.valueOf());
      return this.cart.quantityOfItems = quantity;
    });
  }

  getCartData(): Cart {
    return this.cart;
  }
  increaseQuantity(item): void{
    this.cart.orderProducts.find(a => a === item).quantity++;
    this.cart.quantityOfItems++;
    this.setTotalPrice();

  }
  decreaseQuantity(food): void{
      if (this.cart.orderProducts.filter(a => a === food).find(a => a.quantity === 1)){
        this.cart.orderProducts.splice(food, 1);
        if (this.cart.orderProducts.length === 0) {
          this.clearCart();
        }
      }else{
        this.cart.orderProducts.filter(a => a === food).map(a => a.quantity === a.quantity--);
        this.cart.quantityOfItems--;
      }
      this.setTotalPrice();
  }

  setTotalPrice(): number{
      if (this.cart.orderProducts.length !== 0){
        return this.cart.totalPrice = this.cart.orderProducts.map(a => a.product.price * a.quantity).reduce((a, b) => {
          const price = a + b;
          return this.cart.totalPrice = price;
        });
      }
      return this.cart.totalPrice = 0;
  }

  clearCart() {
    this.cart.orderProducts = [];
    this.cart.quantityOfItems = 0;
    this.cart.totalPrice = 0;
  }
}
