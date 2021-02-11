import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-correct-registration',
  templateUrl: './correct-registration.component.html',
  styleUrls: ['./correct-registration.component.scss']
})
export class CorrectRegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() =>
    { this.router.navigate(['/login']); }, 3000);
  }
}
