import { inject } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CurrentUser } from '../../../shared/types/CurrentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { PersistanceService } from '../../../shared/services/persistence.service';
import { authActions } from './actions';
import { BackendErrors } from '../../../shared/types/BackendErrors.interface';

// export const loginEffect = createEffect(
//   (
//     action$ = inject(Actions),
//     authService = inject(AuthService),
//     persistanceService = inject(PersistanceService),
//   ) => {
//     return action$.pipe(
//       ofType(authActions.login),
//       switchMap(({request}) => {
//         return authService.login(request).pipe(
//           map((currentUser: CurrentUser) => {
//             persistanceService.set('accessToken', currentUser.token);
//             return authActions.loginSuccess({currentUser});
//           }),
//           catchError((errorResponse: HttpErrorResponse) => {
//             const errors = errorResponse.error.errors;
//             return of(authActions.loginFailure({errors}));
//           })
//         );
//       })
//     );
//   }
// )

export const registerEffect = createEffect(
  (
    action$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService),
  ) => {
    return action$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUser) => {
            persistanceService.set('accessToken', currentUser.token);
            return authActions.registerSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            const backendErrors: BackendErrors = {
              type: errorResponse.error.type,
              title: errorResponse.error.title,
              status: errorResponse.error.status,
              detail: errorResponse.error.detail,
              instance: errorResponse.error.traceId,
              errors: {},
            };
            return of(authActions.registerFailure({ errors: backendErrors }));
          })
        );
      })
    );
  },
  { functional: true }
);
