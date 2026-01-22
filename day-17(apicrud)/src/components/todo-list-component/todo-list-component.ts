import { ChangeDetectorRef, Component, OnInit, } from '@angular/core';
import { TodoService } from '../../app/services/todo-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list-component',
  imports: [CommonModule],
  templateUrl: './todo-list-component.html',
  styleUrl: './todo-list-component.css',
})
export class TodoListComponent{
constructor(private todoService:TodoService,private cdr:ChangeDetectorRef){}
todos:any[]=[];
selectedTodo:any=null;
// ngOnInit():void {
// this.todoService.getTodos().subscribe(response=>{
//   this.todos = response;
//   console.log(this.todos);
// });
 
getTodos(){
this.todoService.getTodos().subscribe(res=>{
this.todos=res;
this.cdr.detectChanges();
}
)
}
addTodos(){
  const todo={
    title:'New todo',
    completed:false
  }
  this.todoService.addTodo(todo).subscribe(res=>{
    this.todos.push(res)
    this.cdr.detectChanges();
  })
}
updateTodo(todo:any){
  const Upadtedtodo={
    ...todo,
    title:'Updated todo'
  }
  this.todoService.UpdateTodo(Upadtedtodo).subscribe(res=>{
    todo.title=res.title;
     this.cdr.detectChanges();
  })
}
deleteTodo(id:number){
  this.todoService.DeleteTodo(id).subscribe(()=>{
    this.todos=this.todos.filter(t=>t.id!==id);
     this.cdr.detectChanges();
  })
}
}

