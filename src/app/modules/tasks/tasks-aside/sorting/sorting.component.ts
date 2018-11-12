import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FiltersModel } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  @Input()
  allFilters: FiltersModel;
  @Output()
  sortByDueDateEE = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sortByDueDate(sortingType: string) {
    this.sortByDueDateEE.emit(sortingType);
  }
}
