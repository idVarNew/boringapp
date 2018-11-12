import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    NgbModule, 
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent ],
  exports: [LoginComponent]
})
export class LoginModule {}
