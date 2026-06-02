import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-pie-circle-chart',
  imports: [MatProgressSpinnerModule],
  standalone: true,
  templateUrl: './pie-circle-chart.html',
  styleUrl: './pie-circle-chart.css',
})

export class PieCircleChart {
  @Input() currentValue = 0;
  // since max is not gauranteed to be 100, allow it to be passed in (for temperature)
  @Input() maxValue = 100;
  @Input() label = "";
  @Input() displayValue = "";
  @Input() colour = "#4caf50";

  radius = 50;

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  get dashOffset(): number {
    return this.circumference * (1 - this.currentValue / this.maxValue);
  }
}
