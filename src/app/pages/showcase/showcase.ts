import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Button } from '../../shared/components/button/button';
import { Input } from '../../shared/components/input/input';
import { Card } from '../../shared/components/card/card';
import { Chip } from '../../shared/components/chip/chip';
import { BottomNav, BottomNavItem } from '../../shared/components/bottom-nav/bottom-nav';
import { PieCircleChart } from '../../shared/components/pie-circle-chart/pie-circle-chart';
import { HomeCard } from '../../shared/components/homecard/homecard';

import {
  SettingsList,
  SettingsSection,
} from '../../shared/components/settings-list/settings-list';
import { Slider } from '../../shared/components/slider/slider';
import {
  ConfirmDialog,
  ConfirmDialogData,
} from '../../shared/components/confirm-dialog/confirm-dialog';

/**
 * Living component library — renders every shared component styled to match
 * the Lumifert (iGEM Guelph duckweed) Figma designs.
 */
@Component({
  selector: 'app-showcase',
  imports: [Button, Input, Card, Chip, BottomNav, SettingsList, Slider, PieCircleChart, HomeCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './showcase.html',
  styleUrl: './showcase.css',
})
export class Showcase {
  private readonly dialog = inject(MatDialog);

  protected readonly temperature = signal(30);
  protected readonly activeNav = signal('home');
  protected readonly dialogResult = signal<string>('');

  protected readonly navItems: BottomNavItem[] = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'stats', icon: 'bar_chart', label: 'Stats' },
    { id: 'add', icon: 'add_circle', label: 'Add plant' },
    { id: 'chat', icon: 'chat_bubble', label: 'Messages' },
    { id: 'settings', icon: 'settings', label: 'Settings' },
  ];

  protected readonly settings: SettingsSection[] = [
    {
      heading: 'Account setting',
      items: [
        { id: 'profile', icon: 'person', label: 'Edit profile' },
        { id: 'language', icon: 'translate', label: 'Change language' },
        { id: 'notifications', icon: 'notifications', label: 'Notifications' },
      ],
    },
    {
      heading: 'Legal',
      items: [
        { id: 'terms', icon: 'description', label: 'Terms of service' },
        { id: 'privacy', icon: 'lock', label: 'Privacy policy' },
        { id: 'help', icon: 'help', label: 'Help' },
      ],
    },
  ];

  protected openConfirm(): void {
    const data: ConfirmDialogData = {
      title: 'Modify Temperature',
      message: `Are you sure you want to modify the temperature to ${this.temperature()}°F?`,
      confirmLabel: 'Yes, modify',
      cancelLabel: 'Cancel',
    };

    this.dialog
      .open(ConfirmDialog, { data, width: '320px' })
      .afterClosed()
      .subscribe((confirmed: boolean) => {
        this.dialogResult.set(confirmed ? 'Confirmed ✅' : 'Cancelled ❌');
      });
  }
}
