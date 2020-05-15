import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
<<<<<<< HEAD
import { AdminHeaderComponent } from './_layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './_layout/admin-footer/admin-footer.component';

import { HomeComponent } from "./home/home.component";
import { AdminSidebarComponent } from './_layout/admin-sidebar/admin-sidebar.component';

import { UsersComponent } from "./users/users.component";
import { UserFormComponent } from "./user-form/user-form.component";


=======
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
>>>>>>> d2d4149c6356c102b72ee2538e0ebcd5ae831045
import { RegisterComponent } from './register/register.component';

import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './_layout/admin-header/admin-header.component';
import { AdminSidebarComponent } from './_layout/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './_layout/admin-footer/admin-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RivalriesComponent } from './rivalries/rivalries.component';
import { RivalryFormComponent } from './rivalry-form/rivalry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    HomeComponent,
<<<<<<< HEAD
    UsersComponent,
    UserFormComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
=======
    LoginComponent,
>>>>>>> d2d4149c6356c102b72ee2538e0ebcd5ae831045
    RegisterComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    DashboardComponent,
    UsersComponent,
    UserFormComponent,
    RivalriesComponent,
    RivalryFormComponent,
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
