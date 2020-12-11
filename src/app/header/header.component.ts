import { Component, HostListener, OnInit } from '@angular/core';
import { Header } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showElement: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (document.body.getBoundingClientRect().top === 0) {
      this.showElement = true;
    } else {
      this.showElement = false;
    }
  }
}
