import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../core/services/categoryService/category.service';
import {Category} from '../../core/model/category';
import {MatDialog} from '@angular/material/dialog';
import {CategoryDialogComponent} from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService, private matDialog: MatDialog) { }

  categories: Category[];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void{
    this.categoryService.findAllCategories().subscribe(data => this.categories = data);
  }

  editCategory(category): void{
    this.matDialog.open(CategoryDialogComponent, {
      data: {category}
    }).afterClosed().subscribe(response => this.getCategories());
  }

  deleteCategoryById(id: number): void{
    this.categoryService.deleteCategoryById(id).subscribe(response => this.getCategories());
  }

  openCategoryDialog() {
      this.matDialog.open(CategoryDialogComponent, {
        data: {}
      }).afterClosed().subscribe(response => this.getCategories());
  }
}
