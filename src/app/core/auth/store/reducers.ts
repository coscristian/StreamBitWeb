import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthState } from "./authState.interface";
import { authActions } from "./actions";

const initialState: AuthState = {
  isSubmitting: false,
  currentUser: undefined,
  isLoading: false,
  validationErrors: null,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.login, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser,
    })),
    on(authActions.loginFailure, (state) => ({
      ...state,
      isSubmitting: false,
    })),
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.currentUser
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    }))
)});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectCurrentUser,
  selectIsLoading
} = authFeature;
