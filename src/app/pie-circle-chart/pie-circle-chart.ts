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
  @Input() percentage = 10;
  @Input() label = "Nitrogen";
  // @Input() value = "50%";

  radius = 50;

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }

  get dashOffset(): number {
    console.log(this.percentage);
    console.log(this.circumference * (1 - this.percentage / 100));
    return this.circumference * (1 - this.percentage / 100);
  }
}
