import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyformComponent } from './surveyform.component';

describe('SurveyformComponent', () => {
  let component: SurveyformComponent;
  let fixture: ComponentFixture<SurveyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
