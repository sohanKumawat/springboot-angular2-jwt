import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { MyDateRangePickerModule } from 'mydatepicker/dist/my-date-range-picker.module';

@Component({
     selector: 'custom-date-picker',
     templateUrl: 'app/modules/common/datepicker/customDatepicker.component.html',
     styleUrls:[]
     
})

export class CustomDatepickerComponent implements OnInit {
    selectedDateValue:String='30 Days';
    toggleFlag:any=false;
    @Output() updateDateValue: EventEmitter<any> = new EventEmitter<any>();    
    
        myDateRangePickerOptions = {
        clearBtnTxt: 'Clear',
        beginDateBtnTxt: 'Begin Date',
        endDateBtnTxt: 'End Date',
        acceptBtnTxt: 'OK',
        dateFormat: 'dd.mm.yyyy',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '34px',
        width: '260px',
        inline: false,
        selectionTxtFontSize: '15px',
        alignSelectorRight: false,
        indicateInvalidDateRange: true,
        showDateRangeFormatPlaceholder: false
    };
    constructor() { }

    ngOnInit() {
    }
    toggleCalenderView():void{
        this.toggleFlag=this.toggleFlag?false:true;
    }
    onDateRangeChanged(event:any) {
//        console.log('onDateRangeChanged(): Begin date: ', event.beginDate, ' End date: ', event.endDate);
//        console.log('onDateRangeChanged(): Formatted: ', event.formatted);
//        console.log('onDateRangeChanged(): BeginEpoc timestamp: ', event.beginEpoc, ' - endEpoc timestamp: ', event.endEpoc);
        this.toggleFlag=false;
        this.selectedDateValue=event.formatted;
        this.updateDateValue.emit(event.formatted);
        
    }
     changeDateValue(value:String) {
         this.selectedDateValue=value;
         this.toggleFlag=false;
         this.updateDateValue.emit(value);
      }
   }


