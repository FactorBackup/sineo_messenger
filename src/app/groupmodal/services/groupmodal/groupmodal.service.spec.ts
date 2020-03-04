import { TestBed } from '@angular/core/testing';

import { GroupmodalService } from './groupmodal.service';

describe('GroupmodalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupmodalService = TestBed.get(GroupmodalService);
    expect(service).toBeTruthy();
  });
});
