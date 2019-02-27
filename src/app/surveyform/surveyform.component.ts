import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.css']
})
export class SurveyformComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
