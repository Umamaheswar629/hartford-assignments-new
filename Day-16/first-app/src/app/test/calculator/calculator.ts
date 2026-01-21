import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator';
import { Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-calculator',
  templateUrl: './calculator.html'
})
export class CalculatorComponent {
  num1 = 0;
  num2 = 0;
  result = 0;

  constructor(@Inject(CalculatorService)  private calculator: CalculatorService) {}

  add() {
    this.result = this.calculator.add(this.num1, this.num2);
  }

  subtract() {
    this.result = this.calculator.subtract(this.num1, this.num2);
  }

  multiply() {
    this.result = this.calculator.multiply(this.num1, this.num2);
  }

  divide() {
    this.result = this.calculator.divide(this.num1, this.num2);
  }
}
