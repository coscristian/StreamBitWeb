import { Component, Input } from '@angular/core';
import { MatchMock } from '../../mocks/streambit.mock';

@Component({
  selector: 'streambit-match-card',
  standalone: true,
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss'
})
export class MatchCardComponent {
  @Input({ required: true }) match!: MatchMock;

  initials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase();
  }
}
