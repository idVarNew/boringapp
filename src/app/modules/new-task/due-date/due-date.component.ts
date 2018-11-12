import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { TaskModel } from '../../../shared/models/task.model';
@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.scss']
})
export class DueDateComponent implements OnInit {

  @Input()
  task: TaskModel ;
 
  @Input()
  newTaskForm;
   
  constructor() { }

  ngOnInit() {
  }

  get dueDate() { return this.newTaskForm.get('dueDate'); }
}
