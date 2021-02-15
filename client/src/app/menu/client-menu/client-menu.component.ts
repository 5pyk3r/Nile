import {Component, OnInit} from '@angular/core';
import {Product} from '../../core/model/product';
import {ProductService} from '../../core/services/productService/product.service';
import {CartService} from '../../core/services/cartService/cart.service';
import {Category} from '../../core/model/category';
import {CategoryService} from '../../core/services/categoryService/category.service';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.scss']
})

export class ClientMenuComponent implements OnInit{

  mealType: string;
  dataSource: Product[] = [];
  categories: Category[];

  constructor(public productService: ProductService, private cartService: CartService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }
  filterCategoryOption(category: Category){
    this.productService.findAllProductsByCategory(category).subscribe(data => this.dataSource = data);
    console.log('allProds');
  }
  getAllCategories(){
    this.categoryService.findAllCategories().subscribe(data => this.categories = data);
    console.log('allCats');
  }

  addToCart(food: Product){
    this.cartService.addToCart(food);
  }
  getAllProducts(): void{
    this.productService.findAllProducts().subscribe(data => this.dataSource = data);
  }
}
