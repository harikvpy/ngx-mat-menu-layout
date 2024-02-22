import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidemenu-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidemenu-footer">
      Powered by NgxMatMenuLayout
      <br />
      <small>v15.0.0</small>
    </div>
  `,
  styles: [
    `
      .sidemenu-footer {
        text-align: center;
        font-size: smaller;
        line-height: 1.2em;
      }
    `,
  ],
})
export class SidemenuFooterComponent {}
