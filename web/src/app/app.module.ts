import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';

import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AdminHeaderComponent } from './_layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './_layout/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './_layout/admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    AdminLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    HomeComponent,
    UsersComponent,
    UserFormComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,
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
