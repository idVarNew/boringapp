import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AppActions from '../../../store/actions';
import { StoreModel } from '../../../shared/models/task.model';
import { TaskModel, FiltersModel } from '../../../shared/models/task.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tasks-aside',
  templateUrl: './tasks-aside.component.html',
  styleUrls: ['./tasks-aside.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*',
          display: 'block'
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          display: 'none'
        })
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')])
    ])
  ]
})
export class TasksAsideComponent implements OnInit {
  labels: Array<string> = [];
  isCollapsed = false;
  allFilters: FiltersModel;
  taskLength: number;
  isOpen = false;

  constructor(private store: Store<StoreModel>) {}

  toggleFilters() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.store.select('tasks').subscribe((tasks: Array<TaskModel>) => {
      this.taskLength = tasks.length;
      tasks.forEach((task: TaskModel) => {
        const labels = this.labels.concat(task.labels);
        this.labels = Array.from(new Set(labels));
      });
    });

    this.store.select('filters').subscribe((filters: FiltersModel) => {
      this.allFilters = filters;
    });
  }

  resetFilters(): void {
    this.store.dispatch(new AppActions.resetFilters());
  }
  sortByDueDate(sortingType: string): void {
    this.store.dispatch(new AppActions.sortByDueDate(sortingType));
  }
  filterByLabel(label: string): void {
    this.store.dispatch(new AppActions.filterByLabel(label));
  }
  searchTask(query) {
    this.store.dispatch(new AppActions.searchTask(query));
  }
}
