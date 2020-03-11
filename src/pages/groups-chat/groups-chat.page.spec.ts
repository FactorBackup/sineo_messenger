import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsChatPage } from './groups-chat.page';

describe('GroupsChatPage', () => {
  let component: GroupsChatPage;
  let fixture: ComponentFixture<GroupsChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
