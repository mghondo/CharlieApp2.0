import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TaskService } from './services/tasks.services';
import { CreateTaskComponent } from './create-task/create-task.component';
import { appRoutes } from './routes';
import { LocationListComponent } from './location-list/location-list.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleListComponent,
    TaskListComponent,
    PeopleDetailComponent,
    TaskDetailComponent,
    CreateTaskComponent,
    LocationListComponent,
    ReportsComponent,

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
