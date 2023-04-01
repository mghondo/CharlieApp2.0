import { Component } from '@angular/core';
import { TaskService } from '../services/tasks.services';


@Component({
  selector: 'app-mock-tab',
  templateUrl: './mock-tab.component.html',
  styleUrls: ['./mock-tab.component.css']
})
export class MockTabComponent {
  selectedUsers: any;
  matTabLabels = ['ALL', 'LA', 'SF'];

  constructor(private taskService:TaskService){

  }

}
