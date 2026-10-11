import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'streambit-section-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  @Input({ required: true }) title = '';
  @Input() actionLabel?: string;
  @Input() actionLink?: string;
}
