import { TestBed } from '@angular/core/testing';

import { NgxMatMenuLayoutService } from './ngx-mat-menu-layout.service';

describe('NgxMatMenuLayoutService', () => {
  let service: NgxMatMenuLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatMenuLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
