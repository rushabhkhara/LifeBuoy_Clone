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
  MatMenuModule, MatInputModule, MatSelectModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';

@NgModule({
  imports: [
    MatSelectModule,
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
    MatSelectModule,
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
