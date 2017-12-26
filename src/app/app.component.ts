import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
      firebase.initializeApp({
        apiKey: 'AIzaSyCY32TyAJBlMgSqOyg09C0jG1grZmjVP-I',
        authDomain: 'ng-recipe-book-d7398.firebaseapp.com',
      });
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
