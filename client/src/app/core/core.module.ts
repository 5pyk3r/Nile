import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChipsInputComponent} from './components/chips-input/chips-input.component';
import {authInterceptorProviders} from '../security/auth.interceptor.service';
import {AuthGuardService} from './services/guards/auth-guard.service';
import {CorrectRegistrationComponent} from './components/correct-registration/correct-registration.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    ChipsInputComponent,
    CorrectRegistrationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [authInterceptorProviders, AuthGuardService],

})
export class CoreModule { }
