import { Component, OnInit, Input } from '@angular/core';
import { TaskModel } from '../../../../shared/models/task.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  taskColors: Array<string>;
  @Input()
  editTaskForm: FormGroup;

  formTaskColor = true;

  constructor() {}

  ngOnInit() {}
}
