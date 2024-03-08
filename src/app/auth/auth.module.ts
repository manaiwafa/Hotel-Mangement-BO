import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbStepperModule} from "@nebular/theme";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {RequestPasswordComponent} from "./request-password/request-password.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {AddHotelComponent} from "./register/add-hotel/add-hotel.component";
import {AddUserComponent} from "./register/add-user/add-user.component";
import {SummaryComponent} from "./register/summary/summary.component";


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
    AddHotelComponent,
    AddUserComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    NbStepperModule,
    NbCardModule,
    NbCheckboxModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class AuthModule {
}
