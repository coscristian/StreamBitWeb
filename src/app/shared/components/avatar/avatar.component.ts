import { Component, Input } from '@angular/core';

@Component({
  selector: 'streambit-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() name = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get initials(): string {
    return this.name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  }
}
