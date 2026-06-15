import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

export interface SettingsItem {
  /** Leading Material icon name. */
  icon: string;
  /** Row label, e.g. "Edit profile". */
  label: string;
  /** Unique id emitted on click. */
  id: string;
}

export interface SettingsSection {
  /** Optional section heading, e.g. "Account setting". */
  heading?: string;
  /** Rows in the section. */
  items: SettingsItem[];
}

/**
 * Settings list matching the Lumifert account-settings screen.
 * Renders grouped sections of icon + label rows with a trailing chevron.
 */
@Component({
  selector: 'app-settings-list',
  imports: [MatListModule, MatIconModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './settings-list.html',
  styleUrl: './settings-list.css',
})
export class SettingsList {
  /** Grouped settings sections. */
  readonly sections = input<SettingsSection[]>([]);

  /** Emits the id of the tapped row. */
  readonly select = output<string>();
}
