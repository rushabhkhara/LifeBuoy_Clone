import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatBadgeModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule, MatInputModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule,
    MatMenuModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule
  ],
})
export class MaterialModule { }
