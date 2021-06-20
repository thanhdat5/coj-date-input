# CojDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Guide
1. Install Kendo Date Input
    npm i @progress/kendo-angular-dateinputs
2. Install Localize
    ng add @angular/localize
3. Add to polyfills.ts
    import '@angular/localize/init';
5. Import "COJDateInputModule"
6. Example
    <coj-date-input [value]="birthDate" label="Birth date:" (valueChange)="onDateChange($event)"></coj-date-input>
    - birthDate: Default value
    - label: Label of this control
    - valueChange: Callback function (return {isValid:boolean, value:Date})
    - ....

## REFERENCES:
    - https://www.telerik.com/kendo-angular-ui/components/dateinputs/dateinput/