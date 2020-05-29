import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuardService as AuthGuard} from './auth/guards/auth-guard.service';

import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {AdminLayoutComponent} from './_layout/admin-layout/admin-layout.component';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {UsersComponent} from './users/users.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminRivalriesComponent} from './rivalries/admin-rivalries/admin-rivalries.component';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {RivalryFormComponent} from './rivalries/admin-rivalries/rivalry-form/rivalry-form.component';
import {SiteRivalriesComponent} from './rivalries/site-rivalries/site-rivalries.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileFormComponent} from 'src/app/profile/profile-form/profile-form.component';
import {EnrollmentsFormComponent} from './enrollments/site-enrollments/enrollments-form/enrollments-form.component';
import {AdminMyEnrollmentsComponent} from './enrollments/admin-my-enrollments/admin-my-enrollments.component';


const routes: Routes = [
  // Site routes goes here
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'contact', component: ContactComponent},
      {path: 'enrollments/:id', component: EnrollmentsFormComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'rivalries', component: SiteRivalriesComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'profile/form/:id', component: ProfileFormComponent}
    ]
  },

  // Admin routes goes here here
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'my-enrollments', component: AdminMyEnrollmentsComponent},
      {path: 'rivalries', component: AdminRivalriesComponent},
      {path: 'rivalries/form', component: RivalryFormComponent},
      {path: 'rivalries/form/:id', component: RivalryFormComponent},
      {path: 'users', component: UsersComponent},
      {path: 'users/form', component: UserFormComponent},
      {path: 'users/form/:id', component: UserFormComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'profile/form/:id', component: ProfileFormComponent}
    ]
  },

  // No layout routes
  // LOGIN, REGISTER

  // Otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

