import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StoreModel, TaskModel, FiltersModel } from '../../shared/models/task.model';
import * as AppActions from '../../store/actions';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  newTaskForm: FormGroup;
  labels: Array<string> = [];
  allLabels: Array<string> = [];
  taskColors: Array<string>;

  constructor(
    private store: Store<StoreModel>,
    private tasksService: TasksService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.store.select('tasks').subscribe((tasks: Array<TaskModel>) => {
      tasks.forEach((task: TaskModel) => {
        const labels: Array<string> = this.allLabels.concat(task.labels);
        this.allLabels = Array.from(new Set(labels));
      });
    });

    this.newTaskForm = this.fb.group({
      description: [null, [Validators.required, Validators.maxLength(300)]],
      dueDate: [null, Validators.required],
      importance: [false],
      color: ['#dddddd']
    });

    this.taskColors = this.tasksService.taskColors;
  }

  onSubmit() {
    const newTask = {
      ...this.newTaskForm.value,
      id: generateId(),
      publishDate: new Date(),
      labels: this.labels,
      comments: []
    };

    function generateId(): string {
      return (
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9)
      );
    }
    this.store.dispatch(new AppActions.addNewTask(newTask));
    this.newTaskForm.reset();
    this.router.navigate(['/tasks']);
  }

  removeLabel(label: string) {
    this.labels = this.labels.filter((item: string) => {
      return item !== label;
    });
  }

  addNewLabel(labelValue) {
    this.labels.push(labelValue.value);
  }

  addPrevLabel(label: string) {
    if (this.labels.indexOf(label) === -1) {
      this.labels.push(label);
    }
  }
}
