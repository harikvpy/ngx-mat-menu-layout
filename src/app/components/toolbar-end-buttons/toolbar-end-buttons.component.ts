import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgxMatMenuLayoutComponent } from '@smallpearl/ngx-mat-menu-layout';

@Component({
  selector: 'app-toolbar-end-buttons',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  template: `
    <button mat-icon-button (click)="onNotificationsToggle()">
      <mat-icon>notifications</mat-icon>
    </button>
    <button
      mat-icon-button
      class="user-button"
      [matMenuTriggerFor]="userProfileMenu"
    >
      <img src="assets/avatar.jpg" alt="" />
    </button>
    <mat-menu #userProfileMenu="matMenu">
      <button mat-menu-item (click)="onUpdateProfile()">
        <mat-icon>face</mat-icon>
        <span>Profile</span>
      </button>
      <button mat-menu-item (click)="onChangePassword()">
        <mat-icon>password</mat-icon>
        <span>Change password</span>
      </button>
      <button mat-menu-item (click)="onSignOut()">
        <mat-icon>logout</mat-icon>
        <span>Sign out</span>
      </button>
    </mat-menu>
  `,
  styles: [
    `
      .user-button {
        background: none;
        padding: 0;
        border: 0;
        cursor: pointer;
      }
      .user-button img {
        margin-top: 5px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }
    `,
  ],
})
export class ToolbarEndButtonsComponent {
  @Input() sideMenuLayout!: NgxMatMenuLayoutComponent;

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
