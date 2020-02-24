import { TestBed } from '@angular/core/testing';

import { InviteGroupService } from './invite-group.service';

describe('InviteGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InviteGroupService = TestBed.get(InviteGroupService);
    expect(service).toBeTruthy();
  });
});
