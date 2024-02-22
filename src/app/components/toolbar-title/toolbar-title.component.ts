import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar-title',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  template: `
    <button mat-button [matMenuTriggerFor]="otherCommunitiesMenu">
      <h4 class="community-name">ABC Inc</h4>
      <mat-icon iconPositionEnd>arrow_drop_down</mat-icon>
    </button>
    <mat-menu #otherCommunitiesMenu="matMenu">
      <button mat-menu-item>PQR Inc</button>
      <button mat-menu-item>XYZ Inc</button>
    </mat-menu>
  `,
  styles: [
    `
      .community-name {
        font-size: 1.3em;
      }
    `,
  ],
})
export class ToolbarTitleComponent {}
