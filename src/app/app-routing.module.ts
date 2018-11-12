import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuardService } from './core/services/authentication-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule',
  },
  {
    path: 'forgot-password',
    loadChildren: './modules/forgot-password/forgot-password.module#ForgotPasswordModule',
  },
  {
    path: 'my-account',
    loadChildren: './modules/my-account/my-account.module#MyAccountModule',
  },
  {
    path: 'new',
    loadChildren: './modules/new-task/new-task.module#NewTaskModule',
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'tasks',
    redirectTo: "/"
  },
  {
    path: '',
    loadChildren: './modules/tasks/tasks.module#TasksModule',
    canActivate: [AuthenticationGuardService]
  },

  {
    path: '**',
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
