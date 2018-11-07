import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    CommonModule, BsDatepickerModule.forRoot()
  ],
  exports: [

  ],
  declarations: [BsDatepickerModule]
})
export class NgxModule { }
