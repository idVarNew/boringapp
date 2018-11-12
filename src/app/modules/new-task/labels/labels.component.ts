import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TaskModel } from '../../../shared/models/task.model';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  allLabels: Array<string>;
  @Input()
  labels: Array<string>;
  @Output()
  removeLabelEE = new EventEmitter<string>();
  @Output()
  addNewLabelEE = new EventEmitter<string>();
  @Output()
  addPrevLabelEE = new EventEmitter<string>();
  noLabels = true;

  @ViewChild('labelValue')
  labelInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  enable() {
    if (this.labelInput.nativeElement.value !== '') {
      this.noLabels = false;
    } else {
      this.noLabels = true;
    }
  }
  removeLabel(label: string) {
    this.removeLabelEE.emit(label);
  }

  addNewLabel(label: string) {
    this.addNewLabelEE.emit(label);
    this.labelInput.nativeElement.value = '';
  }
  addPrevLabel(label: string) {
    this.addPrevLabelEE.emit(label);
  }
}
