import {OrderProduct} from './orderProduct';

export interface OrderDTO {
  id: number;
  totalPrice: number;
  products: OrderProduct[];
  userId: number;
  date: Date;
  deliveryDate: Date;
}
