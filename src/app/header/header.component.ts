import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MegaMenuItem[];
  isHidden: boolean = false;
  scrolledY: number = 0;
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
    this.getMenuItems();
  }

  scroll = (event): void => {
    if (window.pageYOffset != 0) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
  };

  getMenuItems(): void {
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'Rockets', routerLink: '/rockets' },
      { label: 'Missions', routerLink: '/missions' },
      { label: 'The SpaceX', routerLink: '/company' },
    ];
  }
}
