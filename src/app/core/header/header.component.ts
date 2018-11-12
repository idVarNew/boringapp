import { Component, OnInit, Renderer2, AfterViewChecked, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/actions';
import { StoreModel } from '../../shared/models/task.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  isLogIn: boolean;
  userEmail = "";

  constructor(
    private serviceAuth: AuthenticationService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private store: Store<StoreModel>
  ) {}

  ngOnInit() {
    this.serviceAuth.user.subscribe(user => {
      if(user){
        this.userEmail = user.email;
      }    
    });
  }

  ngAfterViewChecked() {
    if (localStorage.getItem('userEmailBoringApp') === 'true') {
      this.isLogIn = true;
    } else {
      this.isLogIn = false;
    }
    this.cdr.detectChanges();
  }
  logout(): void {
    localStorage.removeItem('userEmailBoringApp');
    this.store.dispatch(new AppActions.resetStore());
    this.serviceAuth.logout();
    this.router.navigate(['/login']);
  }
}
