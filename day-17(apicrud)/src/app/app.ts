import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { FormDemo } from '../components/form-demo/form-demo';
import { TodoListComponent } from '../components/todo-list-component/todo-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,FormDemo,TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
}

