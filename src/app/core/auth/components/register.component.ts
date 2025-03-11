import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-register',
  templateUrl: './register/register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [ButtonModule]
})
export class RegisterComponent {
  constructor() { }


}
