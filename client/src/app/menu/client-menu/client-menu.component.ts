import {Component, OnInit} from '@angular/core';
import {Product} from '../../core/model/product';
import {ProductService} from '../../core/services/productService/product.service';
import {CartService} from '../../core/services/cartService/cart.service';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.scss']
})

export class ClientMenuComponent implements OnInit{

  mealType: string;
  dataSource: Product[] = [];

  constructor(public productService: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }


  addToCart(food: Product){
    this.cartService.addToCart(food);
  }
  getAllProducts(): void{
    this.productService.findAllProducts().subscribe(data => this.dataSource = data);
  }
}
