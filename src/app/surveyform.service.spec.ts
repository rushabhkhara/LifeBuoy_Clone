import { TestBed } from '@angular/core/testing';

import { SurveyformService } from './surveyform.service';

describe('SurveyformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurveyformService = TestBed.get(SurveyformService);
    expect(service).toBeTruthy();
  });
});
