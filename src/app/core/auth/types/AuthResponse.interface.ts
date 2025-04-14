import { CurrentUser } from "../../../shared/types/CurrentUser.interface";

export interface AuthResponse {
  email: string;
  token: string;
  username: string;
}
