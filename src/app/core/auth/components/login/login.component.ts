import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {FloatLabel} from 'primeng/floatlabel';
import {Router} from '@angular/router';
import {Checkbox} from 'primeng/checkbox';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule, FormsModule,
    ButtonModule, InputTextModule,
    CardModule, FormsModule,
    InputTextModule, FloatLabel,
    FormsModule, ReactiveFormsModule, Checkbox
  ],
  standalone: true
})
export class LoginComponent {
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.router.navigate(['/']);
    }
  }
}
