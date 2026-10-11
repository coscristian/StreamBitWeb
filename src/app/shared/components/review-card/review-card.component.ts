import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReviewMock } from '../../mocks/streambit.mock';
import { AvatarComponent } from '../avatar/avatar.component';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'streambit-review-card',
  standalone: true,
  imports: [RouterLink, AvatarComponent, RatingComponent],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {
  @Input({ required: true }) review!: ReviewMock;
}
