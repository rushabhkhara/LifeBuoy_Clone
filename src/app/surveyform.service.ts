import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class SurveyformService {
  constructor(private firebase: AngularFireDatabase) { }
  formList: AngularFireList<any>;

   form = new FormGroup({
    $key: new FormControl(null),
     firstName: new FormControl('', Validators.required),
     lastname: new FormControl('', Validators.required),
     email: new FormControl('', Validators.required),
     password: new FormControl('', [Validators.required, Validators.minLength(6)]),
     q1: new FormControl('', Validators.required),
     q2: new FormControl('', Validators.required),
     q3: new FormControl('', Validators.required),
  });
   getSurvey() {
  this.formList = this.firebase.list('/surveys');
  return this.formList.snapshotChanges();
}


insertSurvey(survey) {
       console.log("inside survey");
       console.log(survey);

  this.formList.push({
    firstName: survey.firstName ,
    lastName: survey.lastName,
    email: survey.email,
    password: survey.password,
    q1: survey.q1,
    q2: survey.q2,
    q3: survey.q3
  });
  // this.formList.push("reached data");
}
}
