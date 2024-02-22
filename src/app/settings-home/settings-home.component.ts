import { Component, ViewChild } from '@angular/core';
import { NavItem } from '@smallpearl/ngx-mat-menu-layout';
import { NgxMatMenuLayoutComponent } from '@smallpearl/ngx-mat-menu-layout';

@Component({
  selector: 'app-satellite-app-home',
  template: `
    <ngx-mat-menu-layout
      contentContainerClass="ex-content-container"
      [showBackButton]="true"
      brandingImage="assets/angular.png"
      brandingText="SMALLPEARL"
      appTitle="QQBOOKS"
      menuTitle="SETTINGS"
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
  styles: [],
})
export class SatelliteAppHomeComponent {
  menuItems: NavItem[] = [
    {
      route: 'general',
      text: 'GENERAL',
      icon: 'settings_applications',
    },
    {
      route: 'privacy',
      text: 'PRIVACY',
      icon: 'shield',
    },
  ];
  @ViewChild(NgxMatMenuLayoutComponent)
  sideMenuLayout!: NgxMatMenuLayoutComponent;

  constructor() {}
  onNotificationsToggle() {
    if (this.sideMenuLayout) {
      this.sideMenuLayout.infoPane.toggle();
    }
  }

  onUpdateProfile() {
    console.log('onUpdateProfile');
  }
  onChangePassword() {
    console.log('onChangePassword');
  }
  onSignOut() {
    console.log('OnSignOut');
  }
}
