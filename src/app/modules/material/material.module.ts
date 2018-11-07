import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatDatetimepickerModule } from "@mat-datetimepicker/core";
// import { NativeDatetimeComponent } from "./native.component";
@NgModule({
  imports: [
    CommonModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatGridListModule, MatExpansionModule, MatFormFieldModule, MatInputModule,MatTabsModule, MatButtonToggleModule, MatSelectModule, MatCardModule, MatDatepickerModule
  ],
  exports: [MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule, MatGridListModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatButtonToggleModule, MatSelectModule, MatCardModule, MatDatepickerModule],
  declarations: []
})
export class MaterialModule { }
