import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'streambit-button',
  imports: [
    Button,
    CommonModule
  ],
  standalone: true,
  templateUrl: './streambit-button.component.html',
  styleUrl: './streambit-button.component.scss'
})
export class StreambitButtonComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() severity?: 'primary' | 'secondary' | 'success' | 'info'  | 'help' | 'danger';
  @Input() size?: 'small' | 'large';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() onClick: EventEmitter<any> = new EventEmitter();
}
