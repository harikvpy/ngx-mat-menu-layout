import { Component } from '@angular/core';
import { NavItem } from '@smallpearl/ngx-mat-menu-layout';

@Component({
  selector: 'app-home-page',
  template: `
    <ngx-mat-menu-layout
      brandingImage="assets/angular.png"
      brandingText="SMALLPEARL"
      appTitle="QQBOOKS"
      contentContainerClass="ex-content-container"
      [menuItems]="menuItems"
      [menuPaneFooterContent]="versionInfoFooter"
      [toolbarEndContent]="toolbarEndContent"
      [infoPaneContent]="infoPaneContent"
      [infoPaneMinWidth]="300"
      [infoPaneMaxWidth]="500"
      [toolbarTitleContent]="toolbarTitle"
      #layout
    ></ngx-mat-menu-layout>
    <ng-template #versionInfoFooter>
      <app-sidemenu-footer></app-sidemenu-footer>
    </ng-template>
    <ng-template #toolbarTitle>
      <app-toolbar-title></app-toolbar-title>
    </ng-template>
    <ng-template #toolbarEndContent>
      <app-toolbar-end-buttons
        [sideMenuLayout]="layout"
      ></app-toolbar-end-buttons>
    </ng-template>
    <ng-template #infoPaneContent>
      <app-sidemenu-info-pane></app-sidemenu-info-pane>
    </ng-template>
  `,
})
export class HomePageComponent {
  menuItems: NavItem[] = [
    {
      route: 'posts',
      text: 'POSTS',
      icon: 'post_add',
    },
    {
      route: 'feedback',
      text: 'FEEDBACK',
      icon: 'edit_square',
    },
    {
      text: 'MEMBERS',
      icon: 'people',
      children: [
        {
          route: 'allmembers',
          text: 'ALL MEMBERS',
          icon: 'people_alt',
        },
        {
          route: 'invitations',
          text: 'INVITATIONS',
          icon: 'email',
        },
      ],
    },
    {
      route: './settings',
      text: 'SETTINGS',
      icon: 'settings',
    },
  ];
}
