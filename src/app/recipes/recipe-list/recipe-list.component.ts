import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import * as fromRecipe from '../store/recipe.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipeState: Observable<fromRecipe.State> ;

  constructor(private store: Store<fromRecipe.FeatureState>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.recipeState = this.store.select('recipes');
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
