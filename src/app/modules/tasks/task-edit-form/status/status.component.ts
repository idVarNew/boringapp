import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../../../../shared/models/task.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  editTaskForm: FormGroup;
  formTaskStatus = true;
  
  constructor() {}

  ngOnInit() {}
}
