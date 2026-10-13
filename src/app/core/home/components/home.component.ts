import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  MOCK_DISCUSSIONS,
  MOCK_GENRES,
  MOCK_MATCHES,
  MOCK_MOVIES,
  MOCK_REVIEWS
} from '../../../shared/mocks/streambit.mock';
import { StreambitButtonComponent } from '../../../shared/components/streambit-button/streambit-button.component';
// import { MovieCardComponent } from '../../../shared/components/movie-card/movie-card.component';
import { ReviewCardComponent } from '../../../shared/components/review-card/review-card.component';
import { DiscussionCardComponent } from '../../../shared/components/discussion-card/discussion-card.component';
import { MatchCardComponent } from '../../../shared/components/match-card/match-card.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { RatingComponent } from '../../../shared/components/rating/rating.component';

@Component({
  selector: 'streambit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    StreambitButtonComponent,
    // MovieCardComponent,
    ReviewCardComponent,
    DiscussionCardComponent,
    MatchCardComponent,
    SectionHeaderComponent,
    RatingComponent
  ]
})
export class HomeComponent {
  featured = MOCK_MOVIES[0];
  // popular = MOCK_MOVIES.slice(0, 8);
  trending = MOCK_MOVIES.slice(1, 6);
  genres = MOCK_GENRES;
  liveMatches = MOCK_MATCHES.filter((match) => match.status === 'live' || match.status === 'upcoming').slice(0, 3);
  reviews = MOCK_REVIEWS.slice(0, 3);
  discussions = MOCK_DISCUSSIONS.slice(0, 3);

  rank(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
