import { Component, OnInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreModel } from '../../shared/models/task.model';
import { TasksService } from 'src/app/core/services/tasks.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewChecked {
  isLogIn: boolean;
  email: string;
  password: string;
  errorMsg: string;
  messageError = '';
  visible = false;
  userEmail = '';
  loginForm: FormGroup;
  spinner = false;

  constructor(
    private fb: FormBuilder,
    private serviceAuth: AuthenticationService,
    private taskService: TasksService,
    private router: Router,
    private store: Store<StoreModel>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get emailControl() {
    return this.loginForm.get('email');
  }
  get passwordControl() {
    return this.loginForm.get('password');
  }

  ngAfterViewChecked() {
    if (localStorage.getItem('userEmailBoringApp') === 'true') {
      this.isLogIn = true;
    } else {
      this.isLogIn = false;
    }
    this.cdr.detectChanges();
  }

  signIn() {
    this.spinner = true;
    const email = this.loginForm.value.email,
      password = this.loginForm.value.password;

    this.serviceAuth
      .login({ email, password })
      .then(resolve => {
        localStorage.setItem('userEmailBoringApp', 'true');
        this.router.navigate(['tasks']);
      })
      .catch(error => {
        this.spinner = false;
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          this.messageError = 'Wrong email or password';
        } else {
          this.messageError = error.message;
        }
      });
  }

  signUp() {
    this.spinner = true;
    const email = this.loginForm.value.email,
      password = this.loginForm.value.password;

    this.serviceAuth
      .signup(email, password)
      .then(user => {
        localStorage.setItem('userEmailBoringApp', 'true');
        this.router.navigate(['tasks']);
      })
      .catch(error => {
        this.spinner = false;
        this.messageError = error.message;
      });
  }

  resetMessage() {
    this.messageError = '';
  }
}
