import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Avatar } from 'primeng/avatar';
import { InputText } from 'primeng/inputtext';
import { NgClass } from '@angular/common';
import { StreambitButtonComponent } from '../streambit-button/streambit-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'streambit-main-navbar',
  templateUrl: './streambit-main-navbar.component.html',
  styleUrls: ['./streambit-main-navbar.component.scss'],
  standalone: true,
  imports: [CommonModule, MenubarModule, Avatar, InputText, NgClass, StreambitButtonComponent]
})
export class MainNavbarComponent {
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
