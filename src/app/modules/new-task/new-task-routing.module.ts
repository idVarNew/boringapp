import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskComponent } from './new-task.component';

const routes: Routes = [
  {
    path: '',
    component: NewTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTaskRoutingModule {}
