import { Component, ElementRef, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../../shared/interfaces';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-mobile.html',
  styleUrls: ['./menu-mobile.scss']
})
export class MenuMobile {
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Input() items: NavItem[] = [];

  constructor(private el: ElementRef) {}

  close() {
    this.isOpen = false;
    this.isOpenChange.emit(false);
    document.body.classList.remove('no-scroll');
  }

  // Captura clique global
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isOpen) return;

    // Se o clique NÃO foi dentro do menu-panel, fecha
    const panel = this.el.nativeElement.querySelector('.menu-panel');
    if (panel && !panel.contains(event.target as Node)) {
      this.close();
    }
  }
}
