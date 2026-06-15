import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface BottomNavItem {
  /** Material icon name. */
  icon: string;
  /** Accessible label / tooltip. */
  label: string;
  /** Unique id used to mark the active item. */
  id: string;
}

/**
 * Bottom navigation bar matching the Lumifert home/dashboard screens.
 * Pass the list of items and the id of the active one; emits on selection.
 */
@Component({
  selector: 'app-bottom-nav',
  imports: [MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bottom-nav.html',
  styleUrl: './bottom-nav.css',
})
export class BottomNav {
  /** Navigation items, left to right. */
  readonly items = input<BottomNavItem[]>([]);
  /** Id of the currently active item. */
  readonly active = input<string>('');

  /** Emits the id of the selected item. */
  readonly select = output<string>();
}
