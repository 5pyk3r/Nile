import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProductService} from '../../core/services/productService/product.service';
import {ProductDialogComponent} from '../product-dialog/product-dialog.component';
import {CategoryService} from '../../core/services/categoryService/category.service';
import { Category } from 'src/app/core/model/category';
import {Product} from '../../core/model/product';


@Component({
  selector: 'app-products-managment',
  templateUrl: './products-managment.component.html',
  styleUrls: ['./products-managment.component.scss']
})
export class ProductsManagmentComponent implements OnInit{

  constructor(public matDialog: MatDialog, public productService: ProductService, public categoryService: CategoryService) { }

  products: Product[];
  dateFrom: Date;
  dateTo: Date;
  categories: Category[];
  selectedCategory: string;

  ngOnInit(): void {
    this.getCategories();

    this.dateFrom = new Date();
    this.dateFrom.setHours(0);
    this.dateFrom.setMinutes(0);
    this.dateFrom.setMilliseconds(0);

    this.dateTo = new Date();
    this.dateTo.setHours(24);
    this.dateTo.setMinutes(0);
    this.dateTo.setMilliseconds(0);
  }

  onCategoryChange(selectedCategory){
   this.getProducts();
  }

  getProducts(): void{
    this.productService.findAllProductsByCategory(this.selectedCategory).subscribe(data => this.products = data);
  }

  getCategories(): void{
    this.categoryService.findAllCategories().subscribe(data => this.categories = data);
  }

  openProductDialog(): void{
    this.matDialog.open(ProductDialogComponent, {
      data: {}
    }).afterClosed().subscribe(response => this.getProducts());
  }
  editProduct(product): void{
    this.matDialog.open(ProductDialogComponent, {
      data: {product}
    }).afterClosed().subscribe(response => this.getProducts());
  }

  deleteProductById(id: number): void{
    this.productService.deleteProductById(id).subscribe(response => this.getProducts());
  }
}
