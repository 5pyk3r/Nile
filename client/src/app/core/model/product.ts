import {Category} from './category';

export class Product{

  id: number = undefined;
  name: string;
  price: number;
  description: string;
  fileName: string;
  category: Category;
}
