import { Component, OnInit, AfterViewChecked, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/actions';
import { StoreModel } from '../../shared/models/task.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*',
          display: 'block'
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          display: 'none'
        })
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')])
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  isLogIn: boolean;
  userEmail = '';
  isMobile = false;

  constructor(
    private serviceAuth: AuthenticationService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private store: Store<StoreModel>
  ) {}

  ngOnInit() {
    this.serviceAuth.user.subscribe(user => {
      if (user) {
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

  toggleMenu() {
    this.isMobile = !this.isMobile;
  }
}
