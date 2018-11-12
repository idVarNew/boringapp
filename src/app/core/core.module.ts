import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import {  HeaderComponent } from '.';


@NgModule({
  imports: [NgbModule,  HeaderModule],
  declarations: [],
  exports: [ HeaderComponent]
})
export class CoreModule {}
