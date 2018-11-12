import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskModel } from '../../../shared/models/task.model';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  newTaskForm;

  constructor() {}

  ngOnInit() {}

  get desc() { return this.newTaskForm.get('description'); }
  
}
