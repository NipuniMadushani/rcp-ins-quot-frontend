import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateV1Component } from './template-v1.component';

describe('TemplateV1Component', () => {
  let component: TemplateV1Component;
  let fixture: ComponentFixture<TemplateV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
