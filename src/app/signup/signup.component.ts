import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  Validators,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  get name() {
    return this.myForm.get('name');
  }
}
