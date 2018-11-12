import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreModel } from './shared/models/task.model';
import * as AppActions from './store/actions';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private store: Store<StoreModel>
  ) {}

  ngOnInit() {
    this.store.dispatch(new AppActions.loadTasks());
  }
}
