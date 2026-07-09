import { Component, input, model, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * Reusable text input wrapping MatFormField + MatInput.
 *
 * Covers the Lumifert form fields (email, password) and the search bar.
 * Password fields get a show/hide toggle; set `prefixIcon="search"` for the
 * search-style field.
 */
@Component({
  selector: 'app-input',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  /** Field label (floating). */
  readonly label = input('');
  /** Placeholder text. */
  readonly placeholder = input('');
  /** Input type. Use 'password' to get the visibility toggle. */
  readonly type = input<'text' | 'email' | 'password'>('text');
  /** Optional leading Material icon (e.g. 'search'). */
  readonly prefixIcon = input<string>('');
  /** Appearance forwarded to MatFormField. */
  readonly appearance = input<'fill' | 'outline'>('outline');
  /** Two-way bound value. */
  readonly value = model('');

  /** Tracks password visibility for the toggle button. */
  protected readonly hide = signal(true);

  protected toggleHide(event: MouseEvent): void {
    event.preventDefault();
    this.hide.update((h) => !h);
  }

  protected get inputType(): string {
    if (this.type() === 'password') {
      return this.hide() ? 'password' : 'text';
    }
    return this.type();
  }
}
