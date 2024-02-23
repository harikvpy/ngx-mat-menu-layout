# NgxMatMenuLayout

An Angular package for implementing a side menu user interface with a toolbar.
The package uses Angular Material 15 and is compatible with Angular versions
15 and above.

The layout is responsive and hides the side menu when run on small screens.
Toolbar displays an app title at the start. Toolbar content, along with others,
can be customized by content projection.

To use this component, initialize it with the branding logo & text, application
title and menu items (`NavItem[]`).

```
    <ngx-mat-side-menu-layout
      brandingImage="assets/angular.png"
      brandingText="SMALLPEARL"
      appTitle="SUPERCRM"
      [menuItems]="menuItems"
      [menuPaneFooterContent]="versionInfoFooter"
      [toolbarTitleContent]="toolbarTitle"
    ></ngx-mat-side-menu-layout>
    <ng-template #versionInfoFooter>
      <div style="text-align: center; font-size: 0.8em;">
        <select name="language" id="language">
          <option value="en">English</option>
          <option value="zh">中文</option>
        </select>
        <br />
        <small>2.3.102</small>
      </div>
    </ng-template>
    <ng-template #toolbarEndContent>
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
    </ng-template>
```

Define the menu items as an array of `NavItem` objects and set it as the value
for the property `menuItems`.

And voila, you will have a beautify side menu layout with a toolbar on top. The
layout is responsive and on small screens will auto hide. You can display the
navigation menu, by using the hamburger button at the start of the toolbar.

See the sample application for implementation.

### Inputs
| Name | Type | Description |
|------|------|-------|
| showBackButton | boolean | A boolean property that controls if a Back button should be displayed at the top of the side menu. This is useful for secondary menus (note that this is NOT a submenu) from where a navigation path to the parent menu ought to be provided. |
| defaultBackButtonHref | string | The href for the back button is typically automatically determined. If there's no back history, the back button (if specified) will use this href. |
| backButtonText | string | The back button text. Defaults to 'BACK' |
| brandingImage | string | Branding logo (32x32) that will be displayed on the top of the menu pane. |
| brandingText | string | Branding text that is displayed next to the logo on the top of the menu pane. |
| menuItems | NavItem[] | Menu items which is an array of `NavItem` objects. |
| appTitle | string | Application title. |
| menuPaneFooterContent | `TemplateRef<any>` | NgTemplate for the footer displayed below side menu. This will be passed to the `qq-mat-menu-pane`. |
| toolbarEndContent | `TemplateRef<any>` | NgTemplate for the content displayed at the end of the top toolbar. |
| infoPaneContent | `TemplateRef<any>` | NgTemplate for the content displayed in the information pane at the end of the page. |
| toolbarTitleContent | `TemplateRef<any>` | NgTemplate for the toolbar title. If specified, `appTitle` will be ignored. |
| infoPaneMinWidth | number | Minimum width of the info pane at the end of the page (right on LTR text). |
| infoPaneMaxWidth | number | Maximum width of the info pane at the end of the page (right on LTR text). |
| contentContainerClass | string | If specified, the CSS class that is applied to the content container div. This allows global styling of the container class (possibly padding, margin, color, etc) that will be applied to all the compoents corresponding to each menu item's link. |
| menuTitle | string | A title for the menu pane. Typically used in secondary side-menu layout pages. Defaults to an empty string. |

### CSS

The navigation menu theme can be customized by using CSS variables. There are
a bunch of them that control the colors of different elements of the layout.
The following table lists them and their purpose.

The sample project in the library, uses angular material theme to set values
for these variables.

| Variable | Description |
|----------|-------------|
| --qq-sidenav-bg-color | Sidenav menu pane background color |
| --qq-sidenav-fg-color | Sidenav menu pane foreground color |
| --qq-toolbar-bg-color | Toolbar background color |
| --qq-toolbar-fg-color | Toolbar foreground color |
| --qq-sidenav-border-color | Sidemenu border color |
| --qq-toolbar-border-color | Toolbar border color |
| --qq-menu-item-fg-color | Menu item foreground color |
| --qq-menu-item-bg-color | Menu item background color |
| --qq-highlighted-menu-item-fg-color | Highlighted menu item foreground color |
| --qq-highlighted-menu-item-bg-color | Highlighted menu item background color |

### Info pane

The component supports an information pane on the end of the pag. But it's
hidden by default and has to be explicitly shown. One way to do that would be
to query the `infoPane` member of `QQMatSideMenuLayoutComponent`
which is an instance of the `MatSideNav` component. You can toggle its
visibility by calling its `toggle()` method. An approach could be to show a
button at the end of the toolbar and then call `infoPane.toggle()` when the
button is selected.

```
  export class AppHomeComponent implements OnInit {
    @ViewChild(QQMatSideMenuLayoutComponent)
    sideMenuLayout: QQMatSideMenuLayoutComponent;

    ngOnInit(): void {}

    ...
    onNotificationsToggle() {
      if (this.sideMenuLayout) {
        this.sideMenuLayout.infoPane.toggle();
      }
    }
    ...
  }
```

## NavItem

This is the interface that is used to define the side menu items and pass it
as the value for the `menuItems` property. It is defined as:-

```
export interface NavItem {
  text: string;
  icon: string;
  iconType?: 'mat' | 'bi' | 'fa';
  disabled?: boolean;
  route?: string;
  children?: NavItem[];
  backButton?: boolean;
  backHref?: string;
}
```
Members are described in the following table:

| Member | Description |
|-------|----|
| text | The menu item text |
| icon | Icon displayed along with the text |
| iconType | One of {'mat'|'bi'|'fa'}. If not specified, defaults to 'mat' |
| disabled | Indicates that the menu item is disabled |
| route | The relative URL to navigate when the item is selected |
| children | If this item is a container for child menu items, set this to an array of `NavItem` objects |
| backButton | Used internally |
| backHref | Used internally |
