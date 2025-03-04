import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task: any;
  @Output() updateTask = new EventEmitter<string>();
  @Output() deleteTask = new EventEmitter<string>();

  markDone(){
    this.updateTask.emit(this.task.taskUid);
  }

  removeTask(){
    this.deleteTask.emit(this.task.taskUid);
  }

}
