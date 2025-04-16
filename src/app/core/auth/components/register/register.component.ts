import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { RegisterRequest } from '../../types/RegisterRequest.interface';
import { authActions } from '../../store/actions';
import { selectIsSubmitting, selectValidationErrors } from '../../store/reducers';
import { MessageService } from 'primeng/api';
import { Actions, ofType } from '@ngrx/effects';
import { BackendErrors } from '../../../../shared/types/BackendErrors.interface';
import { Toast } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    FormsModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    Toast,
  ],
  providers: [MessageService],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _store: Store,
    private _router: Router,
    private _messageService: MessageService,
    private _actions$: Actions
  ) {
    this._buildFRegisterForm();
    this._subscribeToStore();
    this._subscribeToActions();
  }

  private _buildFRegisterForm() {
    this.registerForm = this._fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  private _subscribeToStore(): void {
    this._store.select(selectIsSubmitting).subscribe((isSubmitting) => {
      this.loading = isSubmitting;
    });
  }

  private _subscribeToActions(): void {
    this._actions$.pipe(ofType(authActions.registerSuccess)).subscribe(() => {
      this.showSuccessRegistration();

      setTimeout(() => {
        this.navigateToHome();
      }, 2500);
    });

    this._actions$
      .pipe(ofType(authActions.registerFailure))
      .subscribe(({ errors }) => {
        this.showErrorRegistration(errors);
      });
  }

  onSubmit() {
    const request: RegisterRequest = {
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
    };

    if (this.registerForm.valid) {
      this._store.dispatch(authActions.register({ request }));
    }
  }

  showSuccessRegistration() {
    this._messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'You have been registered!',
      life: 3000
    });
  }

  showErrorRegistration(errors: BackendErrors): void {
    this._messageService.add({
      severity: 'error',
      summary: 'Registration failed',
      detail: errors.title || 'An error occurred during registration.',
      life: 4000,
    });
  }

  navigateToHome(): void {
    this._router.navigate(['/']);
  }
}
