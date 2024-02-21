import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatMenuLayoutComponent } from './ngx-mat-menu-layout.component';

describe('NgxMatMenuLayoutComponent', () => {
  let component: NgxMatMenuLayoutComponent;
  let fixture: ComponentFixture<NgxMatMenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMatMenuLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMatMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
