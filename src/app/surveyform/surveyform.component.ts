import { Component, OnInit } from '@angular/core';
import { SurveyformService } from '../surveyform.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-surveyform',
  templateUrl: './surveyform.component.html',
  styleUrls: ['./surveyform.component.css']
})
export class SurveyformComponent implements OnInit {
  model: any = {};
  submitted: boolean;
  showSuccessMessage: boolean;
  // formControls: this.surveyformservice.form.controls ;
  constructor(private surveyformservice: SurveyformService) { }

  ngOnInit() {
    this.surveyformservice.getSurvey().subscribe(res => {
      console.log(res)
    });

    console.log('hihello')
  }
  onSubmit() {
      console.log('Function called');
      console.log(JSON.stringify((this.model)));
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
      this.submitted = true;
        this.surveyformservice.insertSurvey(this.model);
        this.showSuccessMessage = true;
        // setTimeout(handler: () => this.showSuccessMessage= false, timeout: 3000 );
        this.submitted = false;
        this.surveyformservice.form.reset();
        this.surveyformservice.form.setValue({
          $key: null,
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          q1: '',
          q2: '',
          q3: '',
        });
      }

}
