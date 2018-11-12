import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../../../../shared/models/task.model';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.scss']
})
export class DueDateComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  editTaskForm: FormGroup;
  formTaskDate = true;

  constructor() {}

  get dueDate() { return this.editTaskForm.get('dueDate'); }
  
  ngOnInit() {}
}
