import { Component, Input } from '@angular/core';

@Component({
  selector: 'streambit-skeleton-card',
  standalone: true,
  templateUrl: './skeleton-card.component.html',
  styleUrl: './skeleton-card.component.scss'
})
export class SkeletonCardComponent {
  @Input() variant: 'poster' | 'row' = 'poster';
}
