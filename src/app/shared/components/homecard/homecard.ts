import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-homecard',
  imports: [MatCardModule, MatButtonModule, NgClass],
  templateUrl: './homecard.html',
  styleUrl: './homecard.css',
})

export class HomeCard {
  // Props
  @Input() title = 'Potato';
  @Input() Img = 'Potato.jpg';
  @Input() CropYield = '14 Days';
  @Input() Status = 'Needs Attention';
  @Input() Temp = '120°F';
  @Input() Biomss = '67%';
  @Input() pH = '4';

  statusClassMap: Record<string, string> = {
    "Healthy": 'status-healthy',
    "Needs Attention": 'status-attention',
  };
}
