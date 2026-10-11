import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  getMovieById,
  getReviewsForMovie,
  MOCK_CAST,
  MOCK_MOVIES,
  MovieMock,
  ReviewMock
} from '../../../../shared/mocks/streambit.mock';
import { MovieCardComponent } from '../../../../shared/components/movie-card/movie-card.component';
import { ReviewCardComponent } from '../../../../shared/components/review-card/review-card.component';
import { RatingComponent } from '../../../../shared/components/rating/rating.component';
import { EmptyStateComponent } from '../../../../shared/components/empty-state/empty-state.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { StreambitButtonComponent } from '../../../../shared/components/streambit-button/streambit-button.component';

@Component({
  selector: 'streambit-content-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    MovieCardComponent,
    ReviewCardComponent,
    RatingComponent,
    EmptyStateComponent,
    SectionHeaderComponent,
    StreambitButtonComponent
  ],
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss'
})
export class ContentDetailComponent {
  private readonly route = inject(ActivatedRoute);
  readonly cast = MOCK_CAST;
  readonly movie$ = this.route.paramMap.pipe(
    map((params) => getMovieById(params.get('id')))
  );

  reviewsFor(movie: MovieMock): ReviewMock[] {
    return getReviewsForMovie(movie.id);
  }

  related(movie: MovieMock): MovieMock[] {
    return MOCK_MOVIES.filter((item) => item.id !== movie.id).slice(0, 5);
  }
}
