import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../core/services/tokenService/token-storage.service';
import {User} from '../core/model/user';
import {OrderService} from '../core/services/orderService/order.service';
import {Order} from '../core/model/order';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  user: User;
  orderList: Order[];
  selectedOrder: Order[];
  displayedColumns: string[] = [ 'name', 'quantity', 'price'];

  constructor(private tokenService: TokenStorageService, private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    // this.orderService.findOrdersByUserId(this.user.id).subscribe(result => this.orders = result);
    this.getSortOrders();
  }
  onNgModelChange(event){
    // console.log(event);
    this.selectedOrder = event;
    // this.orderProductsService.findOrdersProducts(this.selectedOrder[0].id).subscribe(result => this.products = result);
    // this.userService.getUserById(this.selectedOrder[0].userId).subscribe(result => this.user = result);
    // this.user = this.userService
  }
  getSortOrders(){
    this.orderService.findOrdersByUserId(this.user.id).subscribe(data => this.orderList = data.sort((a, b) => +new Date(b.date) - +new Date(a.date)));
  }
}
