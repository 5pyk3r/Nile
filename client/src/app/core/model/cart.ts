import {OrderProduct} from './orderProduct';

export class Cart {
  orderProducts: OrderProduct[];
  quantityOfItems = 0;
  totalPrice: number;
}
