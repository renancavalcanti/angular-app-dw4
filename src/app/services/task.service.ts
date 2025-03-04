import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "https://sea-lion-app-772a9.ondigitalocean.app/v1/tasks"

  constructor(private http: HttpClient, private authService: AuthService) { }


  private getHeaders(){
    return { headers: new HttpHeaders({'x-access-token': this.authService.getToken() || ''})};
  }

  getTasks(){
    return this.http.get(`${this.apiUrl}/createdby`, this.getHeaders())
  }

  getTasksAssigned(){
    return this.http.get(`${this.apiUrl}/assignedto`, this.getHeaders())
  }

  deleteTask(taskId: string){
    return this.http.delete(`${this.apiUrl}/${taskId}`, this.getHeaders())
  }

  updateTask(taskId: string){
    return this.http.patch(`${this.apiUrl}/${taskId}`, {done: true}, this.getHeaders())
  }
}
