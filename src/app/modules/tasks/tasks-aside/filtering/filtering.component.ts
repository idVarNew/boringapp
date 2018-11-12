import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FiltersModel } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {
  @Input()
  labels: Array<string>;
  @Input()
  allFilters: FiltersModel;
  @Output()
  filterByLabelEE = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  filterByLabel(label: string) {
    this.filterByLabelEE.emit(label);
  }
}
