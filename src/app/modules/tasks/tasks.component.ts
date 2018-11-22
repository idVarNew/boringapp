import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../core/services/tasks.service';
import { Store } from '@ngrx/store';
import { StoreModel } from '../../shared/models/task.model';
import { TaskModel } from '../../shared/models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Array<TaskModel>;
  currentDate = new Date();
  outdatedTasks: Array<TaskModel>;
  doneTask: Array<TaskModel>;
  todoTasks: Array<TaskModel>;
  allLabels: Array<string> = [];
  currentPanel = true
  constructor(private store: Store<StoreModel>, private tasksService: TasksService) { }

  ngOnInit() {
    this.store.select('tasks').subscribe((tasks: Array<TaskModel>) => {
      this.tasks = tasks;
      this.outdatedTasks = this.tasksService.getOutdatedTasks(tasks);
      this.doneTask = this.tasksService.getDoneTasks(tasks);
      this.todoTasks = this.tasksService.getToDoTasks(tasks);

      tasks.forEach((task: TaskModel) => {
        const labels = this.allLabels.concat(task.labels);
        this.allLabels = Array.from(new Set(labels));
      });
    });
  }
  closeComments() {
    this.tasks.forEach(task => {
      task.opened = false;
    });
  }
}
