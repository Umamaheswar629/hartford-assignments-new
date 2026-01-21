import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesComponent } from './test/employees/employees';
import { CalculatorComponent } from './test/calculator/calculator';
import { Msg } from './test/msg/msg';
import { Usercomp } from './test/usercomp/usercomp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeesComponent,CalculatorComponent,Msg,Usercomp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
}
