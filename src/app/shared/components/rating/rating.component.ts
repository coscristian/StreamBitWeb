import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'streambit-rating',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() value = 0;
  @Input() max = 10;
  @Input() compact = false;
}
