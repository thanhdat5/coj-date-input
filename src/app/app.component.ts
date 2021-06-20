import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coj-date-input';
  public birthDate: Date = new Date('2021/06/20');
  public isDisableButton = false;
  public onDateChange($event: any) {
    this.isDisableButton = !$event.isValid;
    console.log('Date value: ', $event.value);
  }
}
