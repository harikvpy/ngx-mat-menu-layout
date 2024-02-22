import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu-info-pane',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mat-body info-pane-content">
      <h2>Notifications</h2>
      <p>Info pane content!</p>
    </div>
  `,
  styles: [
    `
      .info-pane-content {
        padding: 10px;
      }
    `,
  ],
})
export class SidemenuInfoPaneComponent {}
