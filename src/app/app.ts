import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PieCircleChart } from './pie-circle-chart/pie-circle-chart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PieCircleChart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('2026-frontend');
}
