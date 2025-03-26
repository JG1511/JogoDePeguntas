import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userForm : FormGroup;

  constructor(private localStorageService: LocalStorageService) {
    this.userForm = new FormGroup({
      name: new FormControl('',Validators.required)
    });
  }

  onSubmit() {
    if (!this.userForm.valid) {
      return console.error("O formulário não está válido");
    }else{
      const token = '1';
      const user = new User(this.userForm.value.name);
      this.localStorageService.setLocalStorage(token, user);
      console.log('Usuário salvo no local storage');
    }

  }
}
