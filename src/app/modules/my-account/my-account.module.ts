import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyAccountComponent } from './my-account.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountRoutingModule} from './my-account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    NgbModule, 
    ReactiveFormsModule,
    MyAccountRoutingModule
  ],
  declarations: [MyAccountComponent ],
  exports: [MyAccountComponent]
})
export class MyAccountModule {}
