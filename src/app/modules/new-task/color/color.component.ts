import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskModel } from '../../../shared/models/task.model';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  @Input()
  task: TaskModel ;
  @Input()
  newTaskForm: FormGroup;
  @Input()
  taskColors: Array<string>
  
  constructor() { }

  ngOnInit() {

  }


}
