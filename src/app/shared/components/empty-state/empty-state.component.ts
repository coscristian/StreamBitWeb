import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StreambitButtonComponent } from '../streambit-button/streambit-button.component';

@Component({
  selector: 'streambit-empty-state',
  standalone: true,
  imports: [RouterLink, StreambitButtonComponent],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
  @Input({ required: true }) title = '';
  @Input() message = '';
  @Input() actionLabel?: string;
  @Input() actionLink?: string;
}
