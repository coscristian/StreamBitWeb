import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';
import { TitleResponse } from '../../../core/titles/types/TitleResponse.interface';

@Component({
  selector: 'streambit-movie-card',
  standalone: true,
  imports: [RouterLink, RatingComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input({ required: true }) title!: TitleResponse;
}
