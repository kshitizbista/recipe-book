import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';
import * as fromApp from '../../store/app.reducers';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import * as authState from '../../auth/store/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl:  './header.component.html'
})

export class HeaderComponent implements OnInit{

  authState: Observable<authState.State>

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  onSaveData(){
    this.dataStorageService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
        // console.log(response.type === HttpEventType.Response);
      }
    );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }

  onLogOut(){
    this.authService.logOut();
  }


}
