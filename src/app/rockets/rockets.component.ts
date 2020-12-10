import { Component, OnInit } from '@angular/core';
import { Rocket } from '../rocket';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css'],
})
export class RocketsComponent implements OnInit {
  rockets: Rocket[] = [];
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.getRockets();
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
