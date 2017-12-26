import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  constructor() { }

  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('Chicken Momo',
      'This is simply a test',
      'http://media3.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg',
      [new Ingredient('Meat',12),new Ingredient('Dough',12)]),
    new Recipe('Samosa',
      'This is simply a test',
      'http://media3.sailusfood.com/wp-content/uploads/2010/03/samosa-chutney.jpg',
    [new Ingredient('Potato',4),new Ingredient('dough',3)])
  ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
