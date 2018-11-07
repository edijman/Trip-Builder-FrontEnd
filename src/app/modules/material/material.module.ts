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
@NgModule({
  imports: [
    CommonModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule,
    MatGridListModule, MatExpansionModule, MatFormFieldModule, MatInputModule,MatTabsModule, MatButtonToggleModule
  ],
  exports: [MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatButtonModule,
    MatGridListModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatButtonToggleModule],
  declarations: []
})
export class MaterialModule { }
