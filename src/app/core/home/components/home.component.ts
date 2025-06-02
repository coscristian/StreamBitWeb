import {Component, OnInit} from '@angular/core';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'streambit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [BadgeModule, AvatarModule, InputTextModule, CommonModule]
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }
}
