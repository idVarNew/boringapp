import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from 'src/app/core/services/tasks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskModel, CommentModel, NewTask } from '../../../shared/models/task.model';
import { toggleComments } from 'src/app/store/actions';
import * as AppActions from '../../../store/actions';
import { StoreModel } from '../../../shared/models/task.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  allLabels: Array<string>;
  outdatedTask = false;
  dateFromNow: string;
  modalReference: NgbModalRef;
  editTaskForm: FormGroup;
  currentLabels: Array<string> = [];
  labels: Array<string>;
  newComments = [];

  constructor(
    private modalService: NgbModal,
    private tasksService: TasksService,
    private fb: FormBuilder,
    private store: Store<StoreModel>
  ) {}

  ngOnInit() {
    this.dateFromNow = moment([this.task.dueDate.year, this.task.dueDate.month - 1, this.task.dueDate.day]).fromNow();

    if (this.dateFromNow.includes('ago')) {
      this.outdatedTask = true;
    }

    this.tasksService.getLabels().subscribe((labelsList: Array<string>) => {
      this.labels = labelsList;
    });

    this.editTaskForm = this.fb.group({
      description: [this.task.description, [Validators.required, Validators.maxLength(300)]],
      status: [this.task.status],
      dueDate: [this.task.dueDate, Validators.required],
      importance: [this.task.importance],
      labels: [''],
      color: [this.task.color],
      comments: ['']
    });

    this.tasksService.getSaveChanges().subscribe((payload: { id: string; newTask: NewTask }) => {
      this.store.dispatch(new AppActions.editTask({ id: payload['id'], task: payload['newTask'] }));
    });
  }

  saveChanges() {
    const newTask: NewTask = {
      ...this.editTaskForm.value,
      labels: this.labels,
      comments: this.newComments.concat(this.task.comments)
    };

    this.tasksService.saveChanges(this.task.id, newTask);
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
  }
  close() {
    this.modalReference.close();
  }
  closeComments() {
    this.store.dispatch(new AppActions.toggleComments({ id: this.task.id, opened: false }));
  }
  openComments() {
    this.store.dispatch(new AppActions.toggleComments({ id: this.task.id, opened: true }));
  }

  deleteTask(id: string) {
    this.store.dispatch(new AppActions.deleteTask(id));
  }
  addComment(comment) {
    const publishDate: number = Date.parse(new Date() + ''),
      newComment: CommentModel = { id: this.task.id, comment: comment.value, publishDate };

    this.store.dispatch(new AppActions.addComment(newComment));
  }
  removeComment(comment) {
    const commentToRemove: { id: string; comment: string } = { id: this.task.id, comment };

    this.store.dispatch(new AppActions.removeComment(commentToRemove));
  }
  filterByLabel(label: string): void {
    this.store.dispatch(new AppActions.filterByLabel(label));
  }
  changeStatus(id) {
    this.store.dispatch(new AppActions.changeStatus({ id: id, status: 'done' }));
  }
}
