import {Component, Input, OnInit} from '@angular/core';
import {NbStepperComponent} from "@nebular/theme";

@Component({
  selector: 'ngx-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit{
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

  @Input() stepper: NbStepperComponent;



  validacion() {
    // Form validation goes here...
    this.stepper.next();
  }
}
