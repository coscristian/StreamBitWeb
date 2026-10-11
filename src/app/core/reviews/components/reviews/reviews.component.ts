import { Component } from '@angular/core';
import { MOCK_REVIEWS, ReviewMock } from '../../../../shared/mocks/streambit.mock';
import { ReviewCardComponent } from '../../../../shared/components/review-card/review-card.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'streambit-reviews',
  standalone: true,
  imports: [ReviewCardComponent, EmptyStateComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  tabs = ['All', 'Highest rated', 'Recent'];
  activeTab = 'All';
  reviews: ReviewMock[] = MOCK_REVIEWS;

  setTab(tab: string): void {
    this.activeTab = tab;
    const items = [...MOCK_REVIEWS];
    if (tab === 'Highest rated') {
      items.sort((a, b) => b.rating - a.rating);
    }
    this.reviews = items;
  }
}
