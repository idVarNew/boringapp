import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TaskModel } from '../../../../shared/models/task.model';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
  @Input()
  task: TaskModel;
  @Input()
  labels: Array<string>;
  @Input()
  allLabels: Array<string>;
  @Output()
  removeLabelEE = new EventEmitter<string>();
  @Output()
  addPrevLabelEE = new EventEmitter<string>();
  @Output()
  addNewLabelEE = new EventEmitter<string>();
  @ViewChild('labelInput')
  labelInput: ElementRef;
  noLabels = true;
  formTaskLabels = true;

  constructor() {}

  ngOnInit() {}

  removeLabel(label: string) {
    this.removeLabelEE.emit(label);
  }

  addPrevLabel(label: string) {
    this.addPrevLabelEE.emit(label);
  }

  addNewLabel(label: string) {
    this.addNewLabelEE.emit(label);
    this.labelInput.nativeElement.value = '';
  }
  enable() {
    if (this.labelInput.nativeElement.value !== '') {
      this.noLabels = false;
    } else {
      this.noLabels = true;
    }
  }
}
