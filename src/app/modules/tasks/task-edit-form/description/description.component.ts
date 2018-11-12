import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TaskModel } from '../../../../shared/models/task.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  editTaskForm: FormGroup;
  formTask = true;

  constructor() {}

  get desc() { return this.editTaskForm.get('description'); }

  ngOnInit() {}
}
