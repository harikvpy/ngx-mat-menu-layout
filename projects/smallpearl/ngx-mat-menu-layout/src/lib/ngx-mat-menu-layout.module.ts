import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { NgxMatMenuPaneModule } from './mat-menu-pane/mat-menu-pane.module';
import { NgxMatMenuLayoutComponent } from './ngx-mat-menu-layout.component';

@NgModule({
  declarations: [NgxMatMenuLayoutComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgxMatMenuPaneModule,
  ],
  exports: [NgxMatMenuLayoutComponent],
})
export class NgxMatMenuLayoutModule {}
