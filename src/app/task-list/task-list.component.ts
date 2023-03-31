import { Component } from '@angular/core';
import { TaskService } from '../services/tasks.services';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  dateToday = new Date()
  

  constructor(private taskService: TaskService){

  }
  tasks = this.taskService.getTasks();
  
  ngOnInit(){

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
