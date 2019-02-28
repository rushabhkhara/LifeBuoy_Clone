// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {config} from 'rxjs';

export const environment = {
  production: false,
   config :{
    apiKey: 'AIzaSyDAHzBMPGEFRMF111NcP44ECWR3DHKT7QI',
    authDomain: 'myangularproject-36ace.firebaseapp.com',
    databaseURL: 'https://myangularproject-36ace.firebaseio.com',
    projectId: 'myangularproject-36ace',
    storageBucket: 'myangularproject-36ace.appspot.com',
    messagingSenderId: '482227833932'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
