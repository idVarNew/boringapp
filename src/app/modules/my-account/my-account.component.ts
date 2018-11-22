import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/actions';
import { StoreModel } from '../../shared/models/task.model';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  alertSuccess: string;
  alertError: string;
  modalReference;
  isDeleted = false;

  constructor(
    private serviceAuth: AuthenticationService,
    private router: Router,
    private store: Store<StoreModel>,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  openModal(content) {
    this.modalReference = this.modalService.open(content);
  }
  closeModal() {
    this.modalReference.close();
  }

  deleteUser() {
    const user = this.serviceAuth.deleteUser();
    user
      .delete()
      .then(user1 => {
        this.modalReference.close();
        this.isDeleted = true;
        this.alertSuccess = 'Your account was deleted. In 5 secunds you will be log out! Bye';

        setTimeout(() => {
          localStorage.removeItem('userEmailBoringApp');
          this.store.dispatch(new AppActions.resetStore());
          this.serviceAuth.logout();
          this.router.navigate(['/login']);
        }, 5000);
      })
      .catch(error => {
        this.alertError = 'There was an error';
      });
  }
}
