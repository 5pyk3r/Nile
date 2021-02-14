import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../core/model/product';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProductService} from '../../core/services/productService/product.service';
import {Category} from '../../core/model/category';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {

  public product: Product;
  public productForm: FormGroup;
  currentFileUpload: File;
  alreadyExists: boolean;
  public category: Category;

  constructor(private dialogRef: MatDialogRef<ProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private productService: ProductService, private formBuilder: FormBuilder) {
    this.product = data.product;
    this.category = data.category;
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      fileName: new FormControl('', [Validators.required])
    });
    this.productForm.get('name').setValue(this.product?.name);
    this.productForm.get('description').setValue(this.product?.description);
    this.productForm.get('price').setValue(this.product?.price);
    this.productForm.get('fileName').setValue(this.product?.fileName);
  }


  close(): void{
    this.dialogRef.close();
    console.log("test" + this.category);
  }
  selectFile(file): void{
    this.currentFileUpload = file.target.files[0];
  }

  save() : void{
    const formData = new FormData();

    const product: any = {
      id: this.product?.id,
      name : this.productForm.controls.name.value,
      description: this.productForm.controls.description.value,
      category: this.product?.category || this?.category,
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
            this.dialogRef.close(response);
            this.productService.findAllProducts();
          });
          this.dialogRef.close();
        }
        else{
          this.alreadyExists = true;
        }
      });
    } else{

      product.id = this.product.id;

      this.productService.updateProductById(this.product.id, formData).subscribe(response =>
        this.dialogRef.close(response));
    }
  }

}
