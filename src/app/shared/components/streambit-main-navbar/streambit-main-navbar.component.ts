import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { StreambitButtonComponent } from '../streambit-button/streambit-button.component';
import { ThemeService } from '../../../core/themes/theme.service';

@Component({
  selector: 'streambit-main-navbar',
  templateUrl: './streambit-main-navbar.component.html',
  styleUrls: ['./streambit-main-navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, StreambitButtonComponent]
})
export class MainNavbarComponent implements OnInit, OnDestroy {
  @Input() items: MenuItem[] = [];
  isDark = true;
  private themeSub?: Subscription;

  constructor(
    private readonly _router: Router,
    private readonly themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeSub = this.themeService.getActiveTheme().subscribe((theme) => {
      this.isDark = theme.name === 'dark';
    });
  }

  ngOnDestroy(): void {
    this.themeSub?.unsubscribe();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onLoginClick(): void {
    this._router.navigate(['/login']);
  }

  onSignUpClick(): void {
    this._router.navigate(['/register']);
  }
}
