import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userForm : FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('',Validators.required)
    });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return console.error("O formulário não está válido");
    }
  }
}
