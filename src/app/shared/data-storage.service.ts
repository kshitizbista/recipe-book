import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    /*const headers =  new HttpHeaders().set('Authorization', ' exampleToken');
    return this.httpClient.put('https://ng-recipe-book-d7398.firebaseio.com/recipes.json',this.recipeService.getRecipes(),{
      observe: 'events',
      params: new HttpParams().set('auth', token) // alternative to url?auth=token
     // headers: headers
    });
    */
    const req = new HttpRequest('PUT','https://ng-recipe-book-d7398.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(),{reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-d7398.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          // const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if(!recipes['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
