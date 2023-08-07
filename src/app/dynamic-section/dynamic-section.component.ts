import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, DynamicInputComponent],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
})
export class DynamicSectionComponent {
  items = [{ value: 0 }];
  isDisabled = true;

  disabled() {
    if (this.items.length === 1) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

  addSection(): void {
    this.items.push({ value: 0 });
    this.disabled();
  }

  deleteSection(index: number): void {
    this.items.splice(index, 1);
    this.disabled();
  }
}
