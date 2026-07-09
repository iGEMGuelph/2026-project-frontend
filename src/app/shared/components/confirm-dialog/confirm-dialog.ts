import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface ConfirmDialogData {
  /** Bold heading, e.g. "Modify Temperature". */
  title: string;
  /** Body message, e.g. "Are you sure you want to modify the temperature to 30°F?". */
  message: string;
  /** Confirm button label. */
  confirmLabel?: string;
  /** Cancel button label. */
  cancelLabel?: string;
  /** Render the confirm button in a destructive/warn color. */
  destructive?: boolean;
}

/**
 * Confirmation dialog matching the Lumifert "Are you sure…" popups.
 *
 * Open it via MatDialog:
 *   dialog.open(ConfirmDialog, { data: { title, message } })
 *     .afterClosed().subscribe(confirmed => ...)  // boolean
 */
@Component({
  selector: 'app-confirm-dialog',
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.css',
})
export class ConfirmDialog {
  protected readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);
  private readonly ref = inject(MatDialogRef<ConfirmDialog>);

  close(result: boolean): void {
    this.ref.close(result);
  }
}
