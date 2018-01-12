import { TestBed, inject } from '@angular/core/testing';

import { EventDropdownService } from './event-dropdown.service';

describe('EventDropdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDropdownService]
    });
  });

  it('should be created', inject([EventDropdownService], (service: EventDropdownService) => {
    expect(service).toBeTruthy();
  }));
});
