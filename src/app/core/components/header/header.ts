import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Nav,
   RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
