import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'The SpaceX Project';
  isHidden: boolean = false;
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }
  scroll = (event): void => {
    if (window.pageYOffset != 0) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
  };
}
