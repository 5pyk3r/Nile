import {Component, OnInit} from '@angular/core';
import {CartService} from '../../core/services/cartService/cart.service';
import {MatDialog} from '@angular/material/dialog';
import {CartDialogComponent} from '../cart-dialog/cart-dialog.component';
import {Cart} from '../../core/model/cart';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {

  constructor(private cartService: CartService, private cartDialog: MatDialog) {

  }
  cartData: Cart = {
    orderProducts: [],
    quantityOfItems: 0,
    totalPrice: 0
  };

  ngOnInit(): void {
    this.cartService.cartDataChanged$.subscribe(cartData => this.cartData = cartData );
  }

  openCartDialog(): void{

    this.cartDialog.open(CartDialogComponent, {
      data: {}
    })
      .afterClosed().subscribe(() => {
      return this.cartService.cartDataChanged$.subscribe(cartData => this.cartData = cartData );
    });
  }
}
