import { Component, HostListener, OnInit } from '@angular/core';
import { Header } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showElement: boolean = true;

  initialTopPosition: number;
  constructor() {}

  ngOnInit(): void {
    this.initialTopPosition = document.body.getBoundingClientRect().top * 10;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log(
      '>>>',
      document.body.getBoundingClientRect().top -
        (document.body.getBoundingClientRect().top % 2)
    );
    console.log('initialPosition>>> ', this.initialTopPosition);
    if (
      document.body.getBoundingClientRect().top * 10 !=
      this.initialTopPosition
    ) {
      this.showElement = false;
    } else {
      this.showElement = true;
    }
  }
}
