import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from 'primeng/avatar';
import {InputText} from 'primeng/inputtext';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {NgClass} from '@angular/common';

@Component({
  selector: 'streambit-main-navbar',
  imports: [
    Avatar,
    InputText,
    Menubar,
    NgClass
  ],
  templateUrl: './streambit-main-navbar.component.html',
  styleUrl: './streambit-main-navbar.component.scss'
})
export class MainNavbarComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  activeItem: MenuItem | null = null;

  ngOnInit(): void {
    this._setDefaultSelection();
  }

  setActive(item: MenuItem) {
    this.activeItem = item;
  }

  isActive(item: MenuItem): boolean {
    return this.activeItem === item;
  }

  private _setDefaultSelection() {
    if (this.items.length > 0) {
      this.activeItem = this.items[0];
    }
  }
}
