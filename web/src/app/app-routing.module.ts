import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  // Site routes goes here
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ]
  },

  // Admin routes goes here here
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'users/form', component: UserFormComponent },
      { path: 'users/form/:id', component: UserFormComponent }
    ]
  },

  // No layout routes
  // LOGIN, REGISTER

  // Otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
