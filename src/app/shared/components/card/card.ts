import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

/**
 * Reusable card matching the Lumifert garden/plant and greenhouse cards.
 *
 * Pass `title`/`subtitle`/`image` for the simple plant-card layout, or project
 * custom content via <ng-content> for richer cards (e.g. dashboards).
 */
@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  /** Card heading. */
  readonly title = input('');
  /** Secondary line under the title. */
  readonly subtitle = input('');
  /** Optional image URL shown at the top of the card. */
  readonly image = input('');
  /** Optional alt text for the image. */
  readonly imageAlt = input('');
}
