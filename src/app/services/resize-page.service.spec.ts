/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { ResizePageService } from './resize-page.service';

describe('Service: ResizePage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResizePageService]
    });
  });

  it('should ...', inject([ResizePageService], (service: ResizePageService) => {
    expect(service).toBeTruthy();
  }));
});
