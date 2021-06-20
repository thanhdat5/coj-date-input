
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { COJDateInputComponent } from "./coj-date-input.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [COJDateInputComponent],
  imports: [
    CommonModule,
    DateInputsModule,
    FormsModule
  ],
  exports:[
    COJDateInputComponent
  ]
})
export class COJDateInputModule {
}
