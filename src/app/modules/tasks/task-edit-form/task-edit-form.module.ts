import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskEditFormComponent } from './task-edit-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';
import { DueDateComponent } from './due-date/due-date.component';
import { ImportanceComponent } from './importance/importance.component';
import { LabelsComponent } from './labels/labels.component';
import { ColorComponent } from './color/color.component';
import { StatusComponent } from './status/status.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  imports: [
    CommonModule, 
    NgbModule, 
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    TaskEditFormComponent,
    DescriptionComponent,
    DueDateComponent,
    ImportanceComponent,
    LabelsComponent,
    ColorComponent,
    StatusComponent
      ],
  exports: [
    TaskEditFormComponent,
    DescriptionComponent,
    DueDateComponent,
    ImportanceComponent,
    LabelsComponent,
    ColorComponent,
    StatusComponent
    ]
})
export class TaskEditFormAsideModule {}
