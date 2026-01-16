import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

 cartTotal = signal(0); 
  location = signal('São Paulo - SP');

updateCart(value: number) { this.cartTotal.set(value); }

}
