import { Component, ViewChild, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../services/tasks.services';
import { Task } from '../zmodels/task';
import { MatSort, } from '@angular/material/sort';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  dateToday = new Date()
  completedTasks:any
  incompleteTasks: any
  tasks: any
  // sort: any;

  // @ViewChild(MatSort) set matSort(sort: MatSort){
  //   this.tasks.sort = sort;
  // };
  
  constructor(private taskService: TaskService){

  }



  // tasks = this.taskService.getTasks();

ngOnInit(){
  this.tasks = this.taskService.getTasks();
  this.completedTasks = this.taskService.getOnlyCompleted();
  this.incompleteTasks = this.taskService.getOnlyIncompleted();
  console.log(this.tasks.sort((a:any, b:any) => new Date(b.whenToComplete).getTime() + new Date(a.whenToComplete).getTime()));
  // this.tasks.sort = this.sort;
  // this.completedTasks.sort = this.sort;
  // this.incompleteTasks.sort = this.sort;
  
}


  returnDate(a: any){
    const date = new Date(a)
    return date.toDateString();
  }

  returnTime(a: any){
    const date = new Date(a)
    return date.toLocaleTimeString()
  }

  completedTask(a: boolean){
    if (a === true){
      return "assignment_turned_in"
    } else {
      return "assignment_late"
    }
  }

  completedClass(a: boolean){
    if (a === true){
      return "completed"
    } else {
      return "incomplete"
    }
  }




 


}
