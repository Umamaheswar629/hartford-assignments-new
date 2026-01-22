import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient){}
    getTodos(){
      return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
    }
    getTodoById(id:string){
      return this.http.get<any>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }
    addTodo(todo:any){
      return this.http.post<any>('https://jsonplaceholder.typicode.com/todos',todo)
    }
    UpdateTodo(todo:any){
      return this.http.put<any>(`${'https://jsonplaceholder.typicode.com/todos'}/${todo.id}`,todo)
    }
    DeleteTodo(id:number){
      return this.http.delete<any>(`${'https://jsonplaceholder.typicode.com/todos'}/${id}`)
    }
  }
