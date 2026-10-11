import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieMock } from '../../mocks/streambit.mock';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'streambit-movie-card',
  standalone: true,
  imports: [RouterLink, RatingComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input({ required: true }) movie!: MovieMock;
}
