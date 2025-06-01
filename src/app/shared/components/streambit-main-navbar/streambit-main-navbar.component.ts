import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {InputText} from 'primeng/inputtext';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {NgClass} from '@angular/common';
import {StreambitButtonComponent} from '../streambit-button/streambit-button.component';
import {Router} from '@angular/router';

@Component({
  selector: 'streambit-main-navbar',
  imports: [
    Menubar,
    NgClass,
    StreambitButtonComponent
  ],
  standalone: true,
  templateUrl: './streambit-main-navbar.component.html',
  styleUrl: './streambit-main-navbar.component.scss'
})
export class MainNavbarComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  activeItem: MenuItem | null = null;

  constructor(private readonly _router: Router) {
  }

  ngOnInit(): void {
    this._setDefaultSelection();
  }

  setActive(item: MenuItem) {
    this.activeItem = item;
  }

  isActive(item: MenuItem): boolean {
    return this.activeItem === item;
  }

  private _setDefaultSelection(): void {
    if (this.items.length > 0) {
      this.activeItem = this.items[0];
    }
  }

  onSignUpClick(): void {
    this._router.navigate(['/register']);
  }
}
