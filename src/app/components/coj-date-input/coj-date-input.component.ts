import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'coj-date-input',
  templateUrl: './coj-date-input.component.html',
  styleUrls: ['./coj-date-input.component.scss']
})
export class COJDateInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: Date = new Date();
  @Input() minDate: Date = new Date(1970, 0, 1);
  @Input() maxDate: Date = new Date(3000, 0, 1);
  @Input() placeholder: string = 'MM.TT.JJJJ';
  @Input() format: string = 'MM/dd/yyyy';
  @Input() customFormatPlaceholder: any = {
    year: 'JJJJ', month: 'MM', day: 'TT',
    hour: 'h', minute: 'm', second: 's'
  };
  @Input() required: boolean = true;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @ViewChild('dateModel') dateModel?: any;
  @Output() valueChange = new EventEmitter<any>();

  ngOnInit() {

  }

  public onDateChanged() {
    this.valueChange.emit({
      value: this.value,
      isValid: this.dateModel?.errors == null
    })
  }
}
