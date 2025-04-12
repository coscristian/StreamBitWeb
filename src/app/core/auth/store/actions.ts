import {createActionGroup, props} from '@ngrx/store';
import {LoginRequest} from '../types/LoginRequest.interface';
import {CurrentUser} from '../../../shared/types/CurrentUser.interface';
import {BackendErrors} from '../../../shared/types/BackendErrors.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Login: props<{request: LoginRequest}>(),
    'Login Success': props<{currentUser: CurrentUser}>(),
    'Login Failure': props<{errors: BackendErrors}>()
  }
});
