import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenteditableModule } from 'ng-contenteditable';
import { SharedModule } from '../../shared/shared.module';
import { NewTaskRoutingModule } from './new-task-routing.module';
import { NewTaskComponent } from './new-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import { DueDateComponent } from './due-date/due-date.component';
import { ImportanceComponent } from './importance/importance.component';
import { LabelsComponent } from './labels/labels.component';
import { ColorComponent } from './color/color.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NewTaskRoutingModule,
    ContenteditableModule,
    SharedModule
  ],
  declarations: [NewTaskComponent, DescriptionComponent, DueDateComponent, ImportanceComponent, LabelsComponent, ColorComponent],
  exports: [NewTaskComponent]
})
export class NewTaskModule {}
