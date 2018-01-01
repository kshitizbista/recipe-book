import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState{
  recipes: State;
}

export interface State {
 recipes: Recipe[];
}

const initialState: State = {
  recipes: [
    new Recipe('Chicken Momo',
      'This is simply a test',
      'http://media3.sailusfood.com/wp-content/uploads/2016/03/veg-momos-recipe.jpg',
      [new Ingredient('Meat',12),new Ingredient('Dough',12)]),
    new Recipe('Samosa',
      'This is simply a test',
      'http://media3.sailusfood.com/wp-content/uploads/2010/03/samosa-chutney.jpg',
      [new Ingredient('Potato',4),new Ingredient('dough',3)])
  ]
};

export function recipeReducers(state = initialState, action: RecipeActions.RecipeActions) {
  switch(action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPE):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPE):
      /*const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updatedRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };*/

      //Alternative approach
      const recipes = [...state.recipes];
      recipes[action.payload.index] = action.payload.updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };

    case (RecipeActions.DELETE_RECIPE):
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    default:
      return state;
  }
}
