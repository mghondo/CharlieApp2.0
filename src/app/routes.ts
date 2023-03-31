import { Routes } from '@angular/router'
import { CreateTaskComponent } from './create-task/create-task.component'
import { LocationListComponent } from './location-list/location-list.component'
import { PeopleListComponent } from './people-list/people-list.component'
import { ReportsComponent } from './reports/reports.component'
import { TaskListComponent } from './task-list/task-list.component'

export const appRoutes:Routes = [
    { path: 'tasks', component: TaskListComponent },
    { path: 'createtask', component: CreateTaskComponent },
    { path: 'location-list', component: LocationListComponent},
    { path: 'people-list', component: PeopleListComponent},
    { path: 'reports', component: ReportsComponent},
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
 

    
]