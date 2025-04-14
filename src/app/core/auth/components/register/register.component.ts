import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { RegisterRequest } from '../../types/RegisterRequest.interface';
import { authActions } from '../../store/actions';
import { selectIsSubmitting } from '../../store/reducers';
import { MessageService } from 'primeng/api';
import { Actions, ofType } from '@ngrx/effects';
import { BackendErrors } from '../../../../shared/types/BackendErrors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    ButtonModule, InputTextModule,
    CardModule, FormsModule,
    InputTextModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    MessageService
  ]
})
export class RegisterComponent {
  registerForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private messageService: MessageService,
    private actions$: Actions
  ) {
    this._buildFRegisterForm();
    this._subscribeToStore();
    this._subscribeToActions();
  }

  private _buildFRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  private _subscribeToStore(): void {
    this.store.select(selectIsSubmitting).subscribe((isSubmitting) => {
      this.loading = isSubmitting;
    });
  }

  private _subscribeToActions(): void {
    this.actions$.pipe(
      ofType(authActions.registerSuccess)
    ).subscribe(() => {
      this.showSuccessRegistration();
    });

    this.actions$.pipe(
      ofType(authActions.registerFailure)
    ).subscribe(({ errors }) => {
      this.showErrorRegistration(errors);
    });
  }

  showErrorRegistration(errors: BackendErrors): void {
    const detail = this._formatErrors(errors);
    this.messageService.add({
      severity: 'error',
      summary: 'Registration failed',
      detail,
      life: 4000
    });
  }

  private _formatErrors(errors: BackendErrors): string {
    // Supongamos que errors = { email: ['has already been taken'], password: ['is too short'] }
    return Object.entries(errors)
      .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
      .join(' | ');
  }


  onSubmit() {
    const request: RegisterRequest = {
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
    };

    if (this.registerForm.valid) {
      this.store.dispatch(authActions.register({ request }));
    }
  }

  showSuccessRegistration() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You have been registered!' });
  }
}
