import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './store/app.effects';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import {reducers } from './store/reducers/reducers';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyB5hOvsyXp69nTH6HVzpf4g9TIT8yEYuB8",
    authDomain: "dailydiary-007.firebaseapp.com",
    databaseURL: "https://dailydiary-007.firebaseio.com",
    projectId: "dailydiary-007",
    storageBucket: "dailydiary-007.appspot.com",
    messagingSenderId: "431288157684"
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule ,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    EffectsModule.forRoot([Effects]),
    StoreModule.forRoot(reducers),  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
