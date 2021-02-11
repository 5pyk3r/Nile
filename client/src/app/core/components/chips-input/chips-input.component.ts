import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
@Component({
  selector: 'app-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.scss']
})
export class ChipsInputComponent implements OnInit{

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  // @Output()
  // recipeIngredients = new EventEmitter<Ingredient[]>();
  //
  // @Input()
  // setIngredients: Ingredient[] = [];
  //
  // ingredients: Ingredient[] = [];

  ngOnInit(): void {
    // if (this.setIngredients != null){
    //   this.ingredients = this.setIngredients;
    // }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      // this.ingredients.push({name: value.trim()});
      // this.recipeIngredients.emit(this.ingredients);
    }

    if (input) {
      input.value = '';
    }
  }

  // remove(ingredient: Ingredient): void {
  //   const index = this.ingredients.indexOf(ingredient);
  //   if (index >= 0) {
  //     this.ingredients.splice(index, 1);
  //   }
  //   this.recipeIngredients.emit(this.ingredients);
  // }
}
