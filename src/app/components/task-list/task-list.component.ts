import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  tasks: any[] = [];
  tasksAssigned: any[] = [];

  constructor(private taskService: TaskService){
    this.loadTasks();
  }

  loadTasks(){
    this.taskService.getTasks().subscribe( (response:any) => {
      console.log(response.allTasks)
      this.tasks = response.allTasks;
    });

    this.taskService.getTasksAssigned().subscribe((response:any)=>{
      this.tasksAssigned = response.allTasks;
    });
  }

  onUpdateTask(taskId: string){
    this.taskService.updateTask(taskId).subscribe(()=>{
      this.loadTasks();
    });
  }

  onDeleteTask(taskId: string){
    this.taskService.deleteTask(taskId).subscribe(()=>{
      this.loadTasks();
    });
  }
}
