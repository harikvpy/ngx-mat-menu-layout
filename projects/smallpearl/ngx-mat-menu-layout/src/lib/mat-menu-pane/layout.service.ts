import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

export interface SideMenuLayoutProps {
  smallScreen: boolean;
  toolbarHeight: number;
}

@Injectable({ providedIn: 'any' })
export class LayoutService implements OnDestroy {
  marginTop: number = 64;
  toolbarHeight: number = 64;
  smallScreen: boolean = false;

  destroy = new Subject<void>();
  _previousUrl: string = '';

  layoutChanged = new BehaviorSubject<SideMenuLayoutProps>({
    smallScreen: false,
    toolbarHeight: 64,
  });

  constructor(public breakpointObserver: BreakpointObserver, router: Router) {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroy))
      .subscribe((result: BreakpointState) => {
        let smallScreen = this.smallScreen;
        let marginTop = this.marginTop;
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            if (query == Breakpoints.XSmall) {
              smallScreen = true;
              marginTop = 56;
              // } else if (query === Breakpoints.Small) {
              //   smallScreen = true;
              //   marginTop = 56;
            } else {
              smallScreen = false;
            }
          }
        }
        if (this.smallScreen != smallScreen || this.marginTop != marginTop) {
          this.smallScreen = smallScreen;
          this.toolbarHeight = this.marginTop = marginTop;
          const newLayout = {
            smallScreen: smallScreen,
            toolbarHeight: marginTop,
          };
          this.layoutChanged.next(newLayout);
        }
      });

    // router.events
    //   .pipe(
    //     filter(
    //       (e: RouterEvent) =>
    //         e instanceof NavigationStart && (router.url.startsWith('/community') || router.url.startsWith('/company'))
    //     ),
    //     tap(() => {
    //       // console.log(`URL: ${this.router.url}`);
    //       this._previousUrl = router.url;
    //     })
    //   )
    //   .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }

  get previousUrl() {
    return this._previousUrl;
  }
}
