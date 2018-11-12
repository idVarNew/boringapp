import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { TasksService } from '../core/services/tasks.service';
import { switchMap, map, catchError, withLatestFrom, tap, concatMap } from 'rxjs/operators';
import * as AppActions from './actions/index';
import { Store, Action } from '@ngrx/store';
import { StoreModel, TaskModel } from '../shared/models/task.model';
import { initialFilters } from './app.state';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private store: Store<StoreModel>,
    private tasksService: TasksService,
  ) {}

  @Effect()
  getTasks$ = this.actions$.pipe(
    ofType(AppActions.LOAD),
    switchMap(() => {
      return this.tasksService.getAllTasks(initialFilters).pipe(
        map((tasks: Array<TaskModel>) => {
          console.log(1111)
          return new AppActions.loadInitialTasks(tasks);
        }),
        catchError(error => error)
      );
    })
  );

  @Effect()
  filterTasks$ = this.actions$.pipe(
    ofType(AppActions.BY_DATE, AppActions.BY_LABEL, AppActions.RESET_FILTERS),
    withLatestFrom(this.store, (action: Action, store: StoreModel) => ({ action, store })),
    switchMap(state => {
      return this.tasksService.getAllTasks(state.store['filters']).pipe(
        map((tasks: Array<TaskModel>) => {
          return new AppActions.loadInitialTasks(tasks);
        }),
        catchError(error => error)
      );
    })
  );

  @Effect()
  searchTasks$ = this.actions$.pipe(
    ofType(AppActions.BY_SEARCH_QUERY),
    withLatestFrom(this.store, (action: Action, store: StoreModel) => ({ action, store })),
    switchMap(state => {

      return this.tasksService.getAllTasks(state.store['filters']).pipe(
        map((tasks: Array<TaskModel>) => {

          const taskFound = tasks.filter((task: TaskModel) => {
            if (task.description.includes(state.store['filters'].bySearchQuery)) {
              return task;
            }
          });
          return new AppActions.loadInitialTasks(taskFound);
        }),
        catchError(error => error)
      );
    })
  );

  @Effect({ dispatch: false })
  createTasks$ = this.actions$.pipe(
    ofType(
      AppActions.ADD_NEW_TASK,
      AppActions.EDIT_TASK,
      AppActions.REMOVE_LABEL,
      AppActions.ADD_COMMENT,
      AppActions.REMOVE_COMMENT,
      AppActions.DELATE_TASK,
      AppActions.OPENED,
    ),
    withLatestFrom(this.store, (action: Action, store: StoreModel) => store),
    map((store: StoreModel) => {
      console.log(store)
      this.tasksService.getUpdate(store['tasks']);
    })
  );
}
