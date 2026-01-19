import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { NavItem } from '../../../shared/interfaces';
import { MenuMobile } from '../menu-mobile/menu-mobile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, 
    MenuMobile,
  CommonModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class Nav {
  currentUrl = signal('/');
  isMenuOpen = signal(false);

  items: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Produtos', path: '/produtos' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set((event as NavigationEnd).urlAfterRedirects);
        this.isMenuOpen.set(false);
        document.body.classList.remove('no-scroll');
      });
  }

  isHome(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
    document.body.classList.toggle('no-scroll', this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.classList.remove('no-scroll');
  }
  
isActive(path: string): boolean { return this.currentUrl() === path; }


}
