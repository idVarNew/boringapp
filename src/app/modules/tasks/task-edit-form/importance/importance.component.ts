import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../../../../shared/models/task.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-importance',
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.scss']
})
export class ImportanceComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  editTaskForm: FormGroup;
  formTaskImportance = true;

  constructor() {}

  ngOnInit() {}
}
