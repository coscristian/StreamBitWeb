import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'streambit-feature-card',
  imports: [
    NgOptimizedImage
  ],
  standalone: true,
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.compontent.scss'
})
export class FeatureCardComponent {

}
