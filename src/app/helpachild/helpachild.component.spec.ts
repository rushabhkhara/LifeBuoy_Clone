import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpachildComponent } from './helpachild.component';

describe('HelpachildComponent', () => {
  let component: HelpachildComponent;
  let fixture: ComponentFixture<HelpachildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpachildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpachildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
