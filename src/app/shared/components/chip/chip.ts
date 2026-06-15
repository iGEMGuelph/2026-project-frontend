import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

/**
 * Reusable status chip matching the Lumifert condition/status tags
 * (e.g. "30°F", "Optimal", "Needs water").
 */
@Component({
  selector: 'app-chip',
  imports: [MatChipsModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chip.html',
  styleUrl: './chip.css',
})
export class Chip {
  /** Text shown inside the chip (also projectable via <ng-content>). */
  readonly label = input('');
  /** Optional leading Material icon. */
  readonly icon = input('');
  /** Color intent — drives the background tint. */
  readonly color = input<'primary' | 'success' | 'warn' | 'neutral'>('primary');
}
