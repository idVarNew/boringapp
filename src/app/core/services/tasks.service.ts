import { Injectable, Renderer2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { map, tap, flatMap, switchMap } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { TaskModel, NewTask, FiltersModel } from '../../shared/models/task.model';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  taskChanges$ = new Subject<{ id: string; newTask: NewTask }>();
  updateLabels$ = new Subject<Array<string>>();
  allTasks$ = new Subject<Array<TaskModel>>();
  itemsRef$: AngularFireList<any>;
  key: string;
  taskColors = ['#dddddd', '#ccf5a7', '#f3b0ad'];

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {}

  getTasks(filters) {
    this.afAuth.authState
      .pipe(
        flatMap((user: firebase.User) => {
          if (user) {
            this.itemsRef$ = this.af.list(`store/${user.uid}`);
            return this.itemsRef$.snapshotChanges().pipe(
              map((changes: Array<any>) => {
                return changes.map(item => {
                  this.key = item.payload.key;
                  this.allTasks$.next(JSON.parse(item.payload.val().tasks));
                  return JSON.parse(item.payload.val().tasks);
                });
              }),
              map(tasks => {
                if (tasks.length > 0) {
                  return filterByLabel(tasks[0]);
                } else {
                  return [];
                }
              }),
              tap((tasks: Array<TaskModel>) => {
                const sortedTasks = sortByDate(tasks);
                this.allTasks$.next(sortedTasks);
              })
            );
          } else {
            return [];
          }
        })
      )
      .subscribe();

    function filterByLabel(tasks: Array<TaskModel>): Array<TaskModel> {
      const label: string = filters.byLabel;

      return tasks.filter(
        (task: TaskModel): TaskModel => {
          if (label === 'all') {
            return task;
          } else if (task.labels.indexOf(label) > -1) {
            return task;
          }
        }
      );
    }

    function sortByDate(tasks: Array<TaskModel>): Array<TaskModel> {
      const dateValue: string = filters.byDueDate;

      if (dateValue !== undefined) {
        return tasks.sort(
          (a: TaskModel, b: TaskModel): number => {
            const A = `${a.dueDate.year}/${a.dueDate.month}/${a.dueDate.day}`;
            const B = `${b.dueDate.year}/${b.dueDate.month}/${b.dueDate.day}`;

            const dateA: number = Date.parse(new Date(A) + '');
            const dateB: number = Date.parse(new Date(B) + '');

            if (dateValue === 'oldest') {
              return dateA - dateB;
            } else if (dateValue === 'newest') {
              return dateB - dateA;
            }
          }
        );
      } else {
        return tasks;
      }
    }
  }

  getUpdate(tasks: Array<TaskModel>) {
    const JSONTasks: string | number = JSON.stringify(tasks);
console.log(tasks)
    if (this.key === undefined) {
      this.itemsRef$.push({ tasks: JSONTasks });
    } else {
      this.itemsRef$.update(this.key, { tasks: JSONTasks });
    }
  }

  getAllTasks(filters: FiltersModel): Observable<Array<TaskModel>> {
    this.getTasks(filters);
    return this.allTasks$.asObservable();
  }

  getToDoTasks(tasks: Array<TaskModel>): Array<TaskModel> {
    return tasks.filter((task: TaskModel) => {
      return task.status === 'todo';
    });
  }

  getDoneTasks(tasks: Array<TaskModel>): Array<TaskModel> {
    return tasks.filter((task: TaskModel) => {
      return task.status === 'done';
    });
  }

  getOutdatedTasks(tasks: Array<TaskModel>): Array<TaskModel> {
    const outdatedTasks: Array<TaskModel> = [];

    tasks.map((task: TaskModel) => {
      const now: string = new Date() + '',
        dt1: number = Date.parse(now),
        taskDate = `${task.dueDate.year}/${task.dueDate.month}/${task.dueDate.day}`,
        dt2: string = new Date(taskDate) + '',
        dt3: number = Date.parse(dt2);

      if (dt1 > dt3) {
        outdatedTasks.push(task);
      }
    });

    return outdatedTasks.filter((task: TaskModel) => {
      return task.status === 'todo';
    });
  }

  saveChanges(id: string, newTask: NewTask): void {
    this.taskChanges$.next({ id, newTask });
  }

  getSaveChanges(): Observable<{ id: string; newTask: NewTask }> {
    return this.taskChanges$.asObservable();
  }
  removeLabel(labelsList: Array<string>): void {
    this.updateLabels$.next(labelsList);
  }

  addLabels(labelsList: Array<string>): void {
    this.updateLabels$.next(labelsList);
  }
  getLabels(): Observable<Array<string>> {
    return this.updateLabels$.asObservable();
  }
}
