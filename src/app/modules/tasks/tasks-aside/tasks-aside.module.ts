import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TasksAsideComponent } from './tasks-aside.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { CurrentFiltersComponent } from './current-filters/current-filters.component';
import { SortingComponent } from './sorting/sorting.component';
import { FilteringComponent } from './filtering/filtering.component';
import { SharedModule } from '../../../shared/shared.module';
import { TasksRoutingModule } from '../tasks-routing.module';
@NgModule({
  imports: [
    CommonModule, 
    NgbModule, 
    ReactiveFormsModule,
    TasksRoutingModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
      TasksAsideComponent,
      SearchComponent,
      CurrentFiltersComponent,
      SortingComponent,
      FilteringComponent,
      ],
  exports: [
      TasksAsideComponent, 
      SearchComponent,
      CurrentFiltersComponent,
      SortingComponent,
      FilteringComponent,
    ]
})
export class TasksAsideModule {}
