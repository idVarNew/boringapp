import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TasksAsideModule } from './tasks-aside/tasks-aside.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskModule } from './task/task.module';
import { TasksComponent } from '.';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    TasksRoutingModule,
    SharedModule,
    TaskModule,
    TasksAsideModule,
    ReactiveFormsModule,

  ],
  declarations: [
    TasksComponent,  
  ],
  exports: [
    TasksComponent 
  ]
})
export class TasksModule {}
