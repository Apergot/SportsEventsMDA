import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { HomeComponent } from './home/home.component';
import { SiteRivalriesComponent } from './rivalries/site-rivalries/site-rivalries.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './_layout/admin-header/admin-header.component';
import { AdminSidebarComponent } from './_layout/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './_layout/admin-footer/admin-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { AdminRivalriesComponent } from './rivalries/admin-rivalries/admin-rivalries.component';
import { RivalryFormComponent } from './rivalries/admin-rivalries/rivalry-form/rivalry-form.component';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { AdminEnrollmentsComponent } from './enrollments/admin-enrollments/admin-enrollments.component';
import { EnrollmentsFormComponent } from './enrollments/site-enrollments/enrollments-form/enrollments-form.component';
import { AdminMyEnrollmentsComponent } from './enrollments/admin-my-enrollments/admin-my-enrollments.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    DashboardComponent,
    UsersComponent,
    UserFormComponent,
    AdminRivalriesComponent,
    RivalryFormComponent,
    AuthComponent,
    SiteRivalriesComponent,
    ProfileComponent,
    ProfileFormComponent,
    AdminEnrollmentsComponent,
    EnrollmentsFormComponent,
    AdminMyEnrollmentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
