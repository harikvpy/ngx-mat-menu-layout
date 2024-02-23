import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject, takeUntil, tap } from 'rxjs';
import { NavItem } from './mat-menu-list-item/nav-item';
import {
  LayoutService,
  SideMenuLayoutProps,
} from './mat-menu-pane/layout.service';

@Component({
  selector: 'ngx-mat-menu-layout',
  template: `
    <mat-sidenav-container class="layout-container">
      <mat-sidenav
        class="menu-pane"
        mode="side"
        opened
        #menuNav
        [mode]="layout.smallScreen ? 'over' : 'side'"
        [opened]="!layout.smallScreen"
        [fixedInViewport]="layout.smallScreen"
      >
        <div class="sidenav-container mw-192px">
          <ngx-mat-menu-pane
            [showBackButton]="showBackButton"
            [defaultBackButtonHref]="defaultBackButtonHref"
            [backButtonText]="backButtonText"
            [brandingImage]="brandingImage"
            [brandingText]="brandingText"
            [menuItems]="menuItems"
            [matSideNav]="menuNav"
            [menuPaneFooterContent]="menuPaneFooterContent"
            [menuTitle]="menuTitle"
            class="h-100"
          ></ngx-mat-menu-pane>
        </div>
      </mat-sidenav>

      <mat-sidenav
        [ngStyle]="{
          'min-width.px': infoPaneMinWidth,
          'max-width.px': infoPaneMaxWidth
        }"
        #infoPane
        closed
        mode="over"
        position="end"
      >
        <ng-container *ngTemplateOutlet="infoPaneContent"></ng-container>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar class="app-toolbar">
          <button mat-icon-button (click)="onToggleMenuPane()">
            <mat-icon>menu</mat-icon>
          </button>
          <ng-template #defaultToolbarTitle>
            <h4>{{ appTitle }}</h4>
          </ng-template>
          <ng-container
            *ngTemplateOutlet="
              toolbarTitleContent ? toolbarTitleContent : defaultToolbarTitle
            "
          ></ng-container>
          <span class="spacer"></span>
          <ng-container *ngTemplateOutlet="toolbarEndContent"></ng-container>
        </mat-toolbar>
        <div
          [class]="'mat-body content-container ' + contentContainerClass"
          [ngStyle]="{
            'height.px': containerHeight,
          }"
        >
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .menu-pane {
        background-color: var(--sp-ngx-mat-menu-bg-color) !important;
        color: var(--sp-ngx-mat-menu-fg-color) !important;
      }
      mat-toolbar {
        background-color: var(--sp-ngx-mat-menu-toolbar-bg-color);
        color: var(--sp-ngx-mat-menu-toolbar-fg-color);
      }
      mat-toolbar {
        padding: 0 0;
      }
      .layout-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .sidenav-container {
        height: 100%;
        max-width: 250px;
        text-wrap: nowrap;
        overflow-x: scroll;
        overflow-y: scroll;
      }
      .content-container {
        overflow-x: scroll;
        overflow-y: scroll;
      }
      .h-100 {
        height: 100%;
      }
      .mw-192px {
        min-width: 192px;
      }
      .app-toolbar {
        border-bottom: 1px solid var(--sp-ngx-mat-menu-toolbar-border-color);
      }
      .spacer {
        flex: 1 1 auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxMatMenuLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('menuNav') menuNav!: MatSidenav;
  layout!: SideMenuLayoutProps;
  destroy = new Subject<void>();
  containerHeight: number = 500;
  topBottomPadding: number = 6;
  @Input() showBackButton: boolean = false;
  @Input() defaultBackButtonHref: string = '';
  @Input() backButtonText: string = 'BACK';
  @Input() brandingImage: string = '';
  @Input() brandingText: string = '';
  @Input() appTitle: string = '';
  @Input() menuTitle: string = '';
  @Input() menuItems: NavItem[] = [];
  // Template Partials for configurable portions of the layout
  @Input() menuPaneFooterContent!: TemplateRef<any>;
  @Input() toolbarEndContent!: TemplateRef<any>;
  @Input() infoPaneContent!: TemplateRef<any>;
  @Input() toolbarTitleContent!: TemplateRef<any>;
  // Width of the info pane on the right (or left for LTR) of the screen.
  @Input() infoPaneMinWidth: number = 250;
  @Input() infoPaneMaxWidth: number = 400;
  @Input() contentContainerClass: string = '';
  // Allows querying infoPane to activate it or to set its attributes
  @ViewChild('infoPane') readonly infoPane!: MatSidenav;

  constructor(
    private layoutService: LayoutService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.layoutService.layoutChanged
      .pipe(
        takeUntil(this.destroy),
        tap((newLayout: SideMenuLayoutProps) => {
          this.layout = newLayout;
          this.containerHeight =
            window.innerHeight -
            (newLayout.toolbarHeight + this.topBottomPadding * 2);
          this.cdr.detectChanges();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  onToggleMenuPane() {
    if (this.menuNav) {
      this.menuNav.toggle();
    }
  }
}
