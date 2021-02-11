import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ProductService} from '../../core/services/productService/product.service';
import {ProductDialogComponent} from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-products-managment',
  templateUrl: './products-managment.component.html',
  styleUrls: ['./products-managment.component.scss']
})
export class ProductsManagmentComponent implements OnInit {

  constructor(public matDialog: MatDialog, public productService: ProductService) { }

  products: any;


  dateFrom: Date;
  dateTo: Date;
  todayEarnings: any;

  ngOnInit(): void {
    this.getProducts();


    this.dateFrom = new Date();
    this.dateFrom.setHours(0);
    this.dateFrom.setMinutes(0);
    this.dateFrom.setMilliseconds(0);

    this.dateTo = new Date();
    this.dateTo.setHours(24);
    this.dateTo.setMinutes(0);
    this.dateTo.setMilliseconds(0);
  }

  getProducts(): void{
    this.products = this.productService.findAllProducts();
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
