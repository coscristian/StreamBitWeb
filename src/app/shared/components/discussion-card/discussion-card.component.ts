import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DiscussionMock } from '../../mocks/streambit.mock';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'streambit-discussion-card',
  standalone: true,
  imports: [RouterLink, AvatarComponent],
  templateUrl: './discussion-card.component.html',
  styleUrl: './discussion-card.component.scss'
})
export class DiscussionCardComponent {
  @Input({ required: true }) discussion!: DiscussionMock;
}
