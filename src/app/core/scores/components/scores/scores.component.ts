import { Component } from '@angular/core';
import { MOCK_MATCHES, MatchMock } from '../../../../shared/mocks/streambit.mock';
import { MatchCardComponent } from '../../../../shared/components/match-card/match-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'streambit-scores',
  standalone: true,
  imports: [MatchCardComponent, EmptyStateComponent],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.scss'
})
export class ScoresComponent {
  tabs = ['All', 'Live', 'Upcoming', 'Final'];
  activeTab = 'All';
  matches: MatchMock[] = MOCK_MATCHES;

  setTab(tab: string): void {
    this.activeTab = tab;
    const map: Record<string, MatchMock['status']> = {
      Live: 'live',
      Upcoming: 'upcoming',
      Final: 'final'
    };
    this.matches = tab === 'All' ? MOCK_MATCHES : MOCK_MATCHES.filter((match) => match.status === map[tab]);
  }
}
