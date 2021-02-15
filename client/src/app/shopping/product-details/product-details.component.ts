import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../core/services/productService/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Product} from '../../core/model/product';
import {MatDialog} from '@angular/material/dialog';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;
  subscription: Subscription;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.findProductById(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
}
