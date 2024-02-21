import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgxMatMenuListItemComponent } from './mat-menu-list-item.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatListModule, MatDialogModule],
  exports: [NgxMatMenuListItemComponent],
  declarations: [NgxMatMenuListItemComponent],
  providers: [],
})
export class NgxMatMenuListItemModule {}
