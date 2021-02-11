import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../core/services/productService/product.service';
import {Product} from '../../core/model/product';

@Component({
  selector: 'app-menu-managment',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss']
})
export class MenuManagementComponent implements OnInit {

  public productForm: FormGroup;
  public product: Product;
  currentFileUpload: File;
  private alreadyExists: boolean;


  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.productForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      fileName: new FormControl('', [Validators.required])
      });
  }

  ngOnInit(): void {
  }

  selectFile(file): void{
    this.currentFileUpload = file.target.files[0];
  }

  addProduct(): any{
    const formData = new FormData();

    const product: any = {
      id: this.product?.id,
      name : this.productForm.controls.name.value,
      fileName: this.currentFileUpload?.name,
      price: this.productForm.controls.price.value,
    };


    if (this.product != null && this.currentFileUpload == null){
      product.fileName = this.product.fileName;
    }

    formData.append('product', JSON.stringify(product));

    if (this.currentFileUpload != null){
      formData.append('file', this.currentFileUpload, this.currentFileUpload.name);
    }

    if (this.product === undefined){
      this.productService.findProductByName(product.name).subscribe(isExist => {
        if (isExist === false && this.currentFileUpload != null) {
          this.productService.postProduct(formData).subscribe(response => {
            console.log(response);
            this.productService.findAllProducts();
          });
        }
        else{
          this.alreadyExists = true;
        }
      });
    } else{

      product.id = this.product.id;

      this.productService.updateProductById(this.product.id, formData).subscribe(response =>
        console.log(response));
    }
  }
}
