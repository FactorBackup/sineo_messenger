import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupsPage } from './new-groups.page';

describe('NewGroupsPage', () => {
  let component: NewGroupsPage;
  let fixture: ComponentFixture<NewGroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGroupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
