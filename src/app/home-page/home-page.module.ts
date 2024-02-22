import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { NgxMatMenuLayoutModule } from '@smallpearl/ngx-mat-menu-layout';
import { SidemenuFooterComponent } from '../components/sidemenu-footer/sidemenu-footer.component';
import { SidemenuInfoPaneComponent } from '../components/sidemenu-info-pane/sidemenu-info-pane.component';
import { ToolbarEndButtonsComponent } from '../components/toolbar-end-buttons/toolbar-end-buttons.component';
import { ToolbarTitleComponent } from '../components/toolbar-title/toolbar-title.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'posts',
        loadComponent: () =>
          import('../posts/posts.component').then((m) => m.PostsComponent),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('../feedback/feedback.component').then(
            (m) => m.FeedbackComponent
          ),
      },
      {
        path: 'allmembers',
        loadComponent: () =>
          import('../all-members/all-members.component').then(
            (m) => m.AllMembersComponent
          ),
      },
      {
        path: 'invitations',
        loadComponent: () =>
          import('../invitations/invitations.component').then(
            (m) => m.InvitationsComponent
          ),
      },
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('../settings-home/settings-home.module').then(
        (m) => m.SatelliteAppHomeModule
      ),
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    SidemenuFooterComponent,
    SidemenuInfoPaneComponent,
    ToolbarTitleComponent,
    ToolbarEndButtonsComponent,
    NgxMatMenuLayoutModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [HomePageComponent],
  providers: [],
})
export class HomePageModule {}
