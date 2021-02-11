import {OrderProduct} from './orderProduct';

export class Order {
  id: number;
  totalPrice: number;
  products: OrderProduct[];
  userId: number;
  date: Date;
  deliveryDate: Date;


  constructor(totalPrice: number, products: OrderProduct[], userId: number) {
    this.totalPrice = totalPrice;
    this.products = products;
    this.userId = userId;
  }
}
