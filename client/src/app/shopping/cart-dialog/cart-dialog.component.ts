import { Component, OnInit } from '@angular/core';
import {CartService} from '../../core/services/cartService/cart.service';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Cart} from '../../core/model/cart';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {

  constructor(private cartService: CartService, private matDialog: MatDialog, private router: Router) {
  }

    cart: Cart = {
      orderProducts: [],
      quantityOfItems: 0,
      totalPrice: 0
    };

  ngOnInit(): void {
    this.cart = this.cartService.getCartData();
    this.cartService.cartDataChanged$.subscribe(cart => this.cart = cart);

  }
  increase(food): void{
    this.cartService.increaseQuantity(food);
    this.cartService.setTotalPrice();
  }
  decrease(food): void{
    this.cartService.decreaseQuantity(food);
    this.cartService.setTotalPrice();
  }
  clearCart(): void{
    this.cartService.clearCart();
    this.cartService.setTotalPrice();
  }
  closeDialog(): void{
    this.matDialog.closeAll();
  }
  openCheckout(): void {
    this.closeDialog();
    this.router.navigate(['/checkout']);
  }
}
