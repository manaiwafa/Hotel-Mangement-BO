import {Component, ViewChild} from '@angular/core';
import {NbStepperComponent} from "@nebular/theme";

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  @ViewChild('stepper') stepper: NbStepperComponent;



}
