import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { StreambitButtonComponent } from '../../../../shared/components/streambit-button/streambit-button.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [RouterLink, FormsModule, InputTextModule, StreambitButtonComponent]
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit(): void {
    // Visual only. Auth will be wired through NgRx later.
  }
}
