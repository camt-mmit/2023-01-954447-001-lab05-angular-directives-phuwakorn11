import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent {
  inputs = [{ value: 0 }];
  isDisabled = true;

  disabled() {
    if (this.inputs.length === 1) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  onChange(index: number, value: number): void {
    this.inputs[index].value = value;
  }

  addInput(): void {
    this.inputs.push({ value: 0 });
    this.disabled();
  }

  deleteInput(index: number): void {
    this.inputs.splice(index, 1);
    this.disabled();
  }

  getResult(): number {
    return this.inputs.reduce((prev, curr) => prev + curr.value, 0);
  }
}
