import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskModel } from '../../../shared/models/task.model';

@Component({
  selector: 'app-importance',
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.scss']
})
export class ImportanceComponent implements OnInit {
  @Input()
  task: TaskModel ;

  @Input()
  newTaskForm;

   constructor() { }

  ngOnInit() {
  
  }
}
