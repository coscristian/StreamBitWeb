import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {MainNavbarComponent} from '../../../shared/components/streambit-main-navbar/streambit-main-navbar.component';
import {Router, RouterOutlet} from '@angular/router';
import { ThemeService } from '../../themes/theme.service';
import { Observable } from 'rxjs';
import { Theme } from '../../themes/theme.interface';

@Component({
  selector: 'streambit-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
  imports: [BadgeModule, AvatarModule, InputTextModule, CommonModule, MainNavbarComponent, RouterOutlet]
})
export class MainLayoutComponent implements OnInit {
  items: MenuItem[] = [];
  activeTheme$: Observable<Theme>;

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    this.activeTheme$ = this.themeService.getActiveTheme();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.router.navigate([''])
      },
      {
        label: 'Content',
        icon: 'pi pi-star',
        command: () => this.router.navigate(['content'])
      },
      {
        label: 'Scores',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
              },
            ],
          },
        ],
      }
    ];
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
} 