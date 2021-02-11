import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/services/authService/auth.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {User} from '../core/model/user';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {Address} from '../core/model/address';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  private registerUser: User;
  errorMessage = '';
  passwordIsEqual: boolean;
  public registrationForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private builder: FormBuilder) {
    this.registrationForm = this.builder.group({
      email: ['',  [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.minLength(4)]],
      street: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: [''],
    }, {validator: this.checkPasswords });
  }

  ngOnInit(): void {
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls.password?.value;
    let confirmPass = group.controls.repeatPassword?.value;

    return pass === confirmPass ? null : { notSame: true};
  }

      register(): void {
      const formData = new FormData();

      const registerUser: any = {
      userName : this.registrationForm.controls.username.value,
      email: this.registrationForm.controls.email.value,
      password: this.registrationForm.controls.password.value };

      const address: any = {
        city: this.registrationForm.controls.city.value,
        street: this.registrationForm.controls.street.value,
      };

      formData.append('registerUser', JSON.stringify(registerUser));
      formData.append('address', JSON.stringify(address));

      this.authService.register(formData).subscribe(
      data => {
        this.router.navigateByUrl('correctRegistration');
      },
      err => {
          this.errorMessage = err.error;
      }
    );
  }
}
