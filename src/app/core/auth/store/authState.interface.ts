import {CurrentUser} from '../../../shared/types/CurrentUser.interface';

export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null | undefined;
  isLoading: boolean;


}
