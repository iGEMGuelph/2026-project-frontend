import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, NgClass],
  templateUrl: './card.html',
  styleUrl: './card.css',
})

export class Card {
  // Props
  @Input() title = 'Potato';
  @Input() Img = 'https://assets.rhs.org.uk/05836e9f-2692-012f-b4fe-e3f22d127fa9/0e09189e-3977-42f6-ba3b-2ac433a14c7a/potato-plant-in-container.jpg?w=1200&fit=clip&fm=jpg&auto=format'; 
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
