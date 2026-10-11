import { Component } from '@angular/core';
import { MOCK_DISCUSSIONS, DiscussionMock } from '../../../../shared/mocks/streambit.mock';
import { DiscussionCardComponent } from '../../../../shared/components/discussion-card/discussion-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'streambit-discussions',
  standalone: true,
  imports: [DiscussionCardComponent, EmptyStateComponent],
  templateUrl: './discussions.component.html',
  styleUrl: './discussions.component.scss'
})
export class DiscussionsComponent {
  tabs = ['All', 'Movies', 'Sports', 'Series'];
  activeTab = 'All';
  discussions: DiscussionMock[] = MOCK_DISCUSSIONS;

  setTab(tab: string): void {
    this.activeTab = tab;
    this.discussions =
      tab === 'All'
        ? MOCK_DISCUSSIONS
        : MOCK_DISCUSSIONS.filter((item) => item.category === tab);
  }
}
