import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlargeImagePage } from './enlarge-image.page';

describe('EnlargeImagePage', () => {
  let component: EnlargeImagePage;
  let fixture: ComponentFixture<EnlargeImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnlargeImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnlargeImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
