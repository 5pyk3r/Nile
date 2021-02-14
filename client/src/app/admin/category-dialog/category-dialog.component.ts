import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CategoryService} from '../../core/services/categoryService/category.service';
import {Category} from '../../core/model/category';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent implements OnInit {

  public category: Category;
  public categoryForm: FormGroup;
  currentFileUpload: File;
  alreadyExists: boolean;

  constructor(private dialogRef: MatDialogRef<CategoryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private categoryService: CategoryService, private formBuilder: FormBuilder) {
    this.category = data.category;
  }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
    });
    this.categoryForm.get('name').setValue(this.category?.name);
  }

  close(): void{
    this.dialogRef.close();
  }

  save(): void{
    const formData = new FormData();

    const category: any = {
      id: this.category?.id,
      name : this.categoryForm.controls.name.value,
    };
    formData.append('category', JSON.stringify(category));

    if (this.category === undefined){
      this.categoryService.findCategoryByName(category.name).subscribe(isExist => {
        if (isExist === false) {
          this.categoryService.postCategory(formData).subscribe(response => {
            this.dialogRef.close(response);
            this.categoryService.findAllCategories();
          });
          this.dialogRef.close();
        }
        else{
          this.alreadyExists = true;
        }
      });
    } else{

      category.id = this.category.id;

      this.categoryService.updateCategoryById(this.category.id, formData).subscribe(response =>
        this.dialogRef.close(response));
    }
  }

}
