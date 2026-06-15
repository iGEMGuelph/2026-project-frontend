import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * Reusable button matching the Lumifert Figma designs.
 *
 * Variants:
 *  - 'filled'   → primary green call-to-action (e.g. "Log in")
 *  - 'outlined' → secondary action (e.g. "Sign up")
 *  - 'google'   → outlined button with a leading Google icon
 */
@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  /** Visual style of the button. */
  readonly variant = input<'filled' | 'outlined' | 'google'>('filled');
  /** Stretch to the full width of the parent (default for mobile screens). */
  readonly fullWidth = input(true);
  /** Optional leading Material icon name. */
  readonly icon = input<string>('');
  /** Native button type. */
  readonly type = input<'button' | 'submit'>('button');
  /** Disabled state. */
  readonly disabled = input(false);

  /** Emitted on click. */
  readonly clicked = output<MouseEvent>();

  onClick(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}
