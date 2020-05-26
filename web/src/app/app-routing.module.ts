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
import {RivalriesComponent} from './rivalries/rivalries.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {RivalryFormComponent} from './rivalry-form/rivalry-form.component';
import { ProfileComponent } from './profile/profile.component';




const routes: Routes = [
  // Site routes goes here
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'contact', component: ContactComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },

  // Admin routes goes here here
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'rivalries', component: RivalriesComponent },
      { path: 'rivalries/form', component: RivalryFormComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/form', component: UserFormComponent },
      { path: 'users/form/:id', component: UserFormComponent },
      { path: 'profiles', component: ProfileComponent},
      {path: 'rivalries/form/:id', component: RivalryFormComponent},
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

