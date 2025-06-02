import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './theme.interface';
import { darkTheme } from './dark.theme';
import { lightTheme } from './light.theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private activeTheme = new BehaviorSubject<Theme>(darkTheme);
  private themes: Map<string, Theme> = new Map();

  constructor() {
    this.themes.set(darkTheme.name, darkTheme);
    this.themes.set(lightTheme.name, lightTheme);
    
    // Cargar tema guardado si existe
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      const theme = this.themes.get(savedTheme);
      if (theme) {
        this.setActiveTheme(theme);
      }
    }
  }

  getActiveTheme() {
    return this.activeTheme.asObservable();
  }

  setActiveTheme(theme: Theme) {
    localStorage.setItem('selected-theme', theme.name);
    this.activeTheme.next(theme);
    
    // Aplicar propiedades del tema
    Object.keys(theme.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        theme.properties[property as keyof Theme['properties']]
      );
    });
  }

  toggleTheme() {
    const current = this.activeTheme.value;
    const next = current.name === 'dark' ? lightTheme : darkTheme;
    this.setActiveTheme(next);
  }
} 