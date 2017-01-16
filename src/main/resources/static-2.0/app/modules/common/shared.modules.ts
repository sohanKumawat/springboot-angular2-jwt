import { NgModule,Optional,SkipSelf }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MyDateRangePickerModule } from 'mydatepicker/dist/my-date-range-picker.module';
import { CustomDatepickerComponent,HighlightDirective,ExponentialPipe }         from './index';
@NgModule({
  imports:      [ CommonModule,MyDateRangePickerModule ],
  declarations: [ ExponentialPipe, HighlightDirective,CustomDatepickerComponent ],
  exports:      [ ExponentialPipe, HighlightDirective,CustomDatepickerComponent,
                  CommonModule, FormsModule,MyDateRangePickerModule ]
})
export class SharedModule { 
    constructor (@Optional() @SkipSelf() sharedModule: SharedModule) {
        if (sharedModule) {
          throw new Error('SharedModule is already loaded. Import it in the AppModule only');
        }
      }
}