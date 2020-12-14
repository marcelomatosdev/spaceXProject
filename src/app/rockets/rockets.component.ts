import { Component, OnInit } from '@angular/core';
import { Rocket } from '../rocket';
import { RocketService } from '../rocket.service';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.scss'],
})
export class RocketsComponent implements OnInit {
  rockets: Rocket[] = [];
  showList: boolean = true;

  constructor(private apollo: Apollo, public rocketService: RocketService) {}

  ngOnInit(): void {
    this.getRockets();
    // this.rocketService.getRockets();
  }
  handleClick(event) {
    console.log('clicked', event);
    this.showList = !this.showList;
  }
  getRockets(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rockets {
              id
              name
              description
              wikipedia
              success_rate_pct
              first_flight
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.rockets = result.data && result.data.rockets;
      });
  }
}
