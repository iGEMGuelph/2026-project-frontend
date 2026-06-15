import { Component, input, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

/**
 * Reusable slider matching the Lumifert "Modify Temperature" screens.
 * Two-way binds the value and shows the current reading with an optional unit.
 */
@Component({
  selector: 'app-slider',
  imports: [FormsModule, MatSliderModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  /** Caption above the slider, e.g. "Modify Temperature". */
  readonly label = input('');
  /** Unit appended to the displayed value, e.g. "°F". */
  readonly unit = input('');
  readonly min = input(0);
  readonly max = input(100);
  readonly step = input(1);
  /** Show tick marks / discrete steps. */
  readonly discrete = input(true);
  /** Two-way bound value. */
  readonly value = model(0);
}
