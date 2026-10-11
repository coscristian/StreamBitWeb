import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { MainNavbarComponent } from '../../../shared/components/streambit-main-navbar/streambit-main-navbar.component';
import { StreambitButtonComponent } from '../../../shared/components/streambit-button/streambit-button.component';
import { ThemeService } from '../../themes/theme.service';
import { Theme } from '../../themes/theme.interface';

@Component({
  selector: 'streambit-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MainNavbarComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    StreambitButtonComponent
  ]
})
export class MainLayoutComponent {
  activeTheme$: Observable<Theme>;

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    this.activeTheme$ = this.themeService.getActiveTheme();
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
