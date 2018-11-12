import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TasksService } from '../../../core/services/tasks.service';
import { FormGroup } from '@angular/forms';
import { TaskModel, CommentModel, NewTask } from '../../../shared/models/task.model';

@Component({
  selector: 'app-task-edit-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.scss']
})
export class TaskEditFormComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  editTaskForm: FormGroup;
  @Input()
  allLabels: Array<string>;
  labels: Array<string>;
  taskColors: Array<string>

  
  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.labels = [].concat(this.task.labels);
    this.tasksService.addLabels(this.task.labels);
    this.taskColors = this.tasksService.taskColors;
  }

  removeLabel(label: string) {
    this.labels = this.labels.filter((item: string) => {
      return item !== label;
    });
    this.tasksService.removeLabel(this.labels);
  }

  addPrevLabel(label: string) {
    if (this.labels.indexOf(label) === -1) {
      this.labels.push(label);
      this.tasksService.addLabels(this.labels);
    }
  }

  addNewLabel(label) {
    this.labels.push(label.value);
    this.tasksService.addLabels(this.labels);
    this.editTaskForm.patchValue({
      labels: ''
    });
  }
}
