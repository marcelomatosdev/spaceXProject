import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  items: MegaMenuItem[];
  showElement: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.getMenuItems();
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (document.body.getBoundingClientRect().top === 0) {
      this.showElement = true;
    } else {
      this.showElement = false;
    }
  }
  getMenuItems(): void {
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'Rockets', routerLink: '/rockets' },
      { label: 'Missions', routerLink: '/missions' },
      { label: 'The SpaceX', routerLink: '/company' },
    ];
  }
}
