import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  constructor(
    @Inject('apiUrl') private apiurl,
    private http: HttpClient) { }

  addTask(task){
    return this.http.post(this.apiurl +'/todo',task);
  }

  getTasks(){
    return this.http.get(this.apiurl +'/todo');
  }

  updateTask(task){
    return this.http.put(this.apiurl +'/todo',task);
  }

  deleteTask(id){
    return this.http.delete(`${this.apiurl}/todo/${id}`);
  }

}
