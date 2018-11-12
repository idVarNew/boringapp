import { Component, OnInit, Output, EventEmitter, Input,  OnChanges } from '@angular/core';
import { FiltersModel } from '../../../../shared/models/task.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  @Input()
  allFilters: FiltersModel;
  @Output()
  searchTaskEE = new EventEmitter<string>();
  query: string;

  constructor() {}

  ngOnInit() {}
  
  ngOnChanges(){
    if (this.allFilters.bySearchQuery === '') {
      this.query = '';
    }
  }
  searchTask(query: string) {
    this.searchTaskEE.emit(query);
  }
}
