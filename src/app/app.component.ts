import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from 'primeng/config';
import { ThemeService } from './core/themes/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'streambit-web';

  constructor(
    private primeng: PrimeNG,
    _themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
