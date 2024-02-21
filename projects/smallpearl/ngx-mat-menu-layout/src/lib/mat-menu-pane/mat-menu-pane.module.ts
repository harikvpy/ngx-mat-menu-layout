import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMatMenuListItemModule } from '../mat-menu-list-item/mat-menu-list-item.module';
import { NgxMatMenuPaneComponent } from './mat-menu-pane.component';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatMenuModule,
    NgxMatMenuListItemModule,
  ],
  exports: [NgxMatMenuPaneComponent],
  declarations: [NgxMatMenuPaneComponent],
  providers: [],
})
export class NgxMatMenuPaneModule {}
