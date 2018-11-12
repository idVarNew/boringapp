import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-task-comments',
  templateUrl: './task-comments.component.html',
  styleUrls: ['./task-comments.component.scss']
})
export class TaskCommentsComponent implements OnInit {
  @Input()
  task;
  @Input()
  editTaskForm;
  @Output()
  addCommentEE = new EventEmitter();
  @Output()
  removeCommentEE = new EventEmitter();
  @Output()
  closeCommentsEE = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  addComment(comment) {
    this.addCommentEE.emit(comment);
  }
  removeComment(comment: string) {
    this.removeCommentEE.emit(comment);
  }
  closeComments() {
   this.closeCommentsEE.emit()
  }
}
