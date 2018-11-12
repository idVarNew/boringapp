import { Component, OnInit, Input } from '@angular/core';
import { FiltersModel } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-current-filters',
  templateUrl: './current-filters.component.html',
  styleUrls: ['./current-filters.component.scss']
})
export class CurrentFiltersComponent implements OnInit {
  @Input()
  allFilters: FiltersModel;

  constructor() {}

  ngOnInit() {}
}
