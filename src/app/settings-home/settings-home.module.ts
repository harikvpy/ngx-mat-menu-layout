import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { NgxMatMenuLayoutModule } from '@smallpearl/ngx-mat-menu-layout';
import { SidemenuFooterComponent } from '../components/sidemenu-footer/sidemenu-footer.component';
import { SidemenuInfoPaneComponent } from '../components/sidemenu-info-pane/sidemenu-info-pane.component';
import { ToolbarEndButtonsComponent } from '../components/toolbar-end-buttons/toolbar-end-buttons.component';
import { ToolbarTitleComponent } from '../components/toolbar-title/toolbar-title.component';
import { SatelliteAppHomeComponent } from './settings-home.component';

const routes: Routes = [
  {
    path: '',
    component: SatelliteAppHomeComponent,
    children: [
      {
        path: 'general',
        loadComponent: () =>
          import('./general/general.component').then((c) => c.GeneralComponent),
      },
      {
        path: 'privacy',
        loadComponent: () =>
          import('./privacy/privacy.component').then((c) => c.PrivacyComponent),
      },
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [SatelliteAppHomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NgxMatMenuLayoutModule,
    SidemenuFooterComponent,
    SidemenuInfoPaneComponent,
    ToolbarTitleComponent,
    ToolbarEndButtonsComponent,
    RouterModule.forChild(routes),
  ],
})
export class SatelliteAppHomeModule {}
