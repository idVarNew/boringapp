import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksRoutingModule } from '../tasks-routing.module';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TaskComponent } from './task.component';
import { TaskCommentsComponent } from '../task/task-comments/task-comments.component';
import { TaskEditFormAsideModule } from '../task-edit-form/task-edit-form.module';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    TasksRoutingModule,
    SharedModule,
    TaskEditFormAsideModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TimeAgoPipe, 
    TaskComponent,
    TaskCommentsComponent 
],
  exports: [
    TaskComponent,
    TaskCommentsComponent 
    ]
})
export class TaskModule {}
