import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  standalone: true,
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  userEmail: string = 'usertotest1@gmail.com';

  onSendLink(): void {
    console.log('Send link to:', this.userEmail);
    // Add your send link logic here
  }
}
