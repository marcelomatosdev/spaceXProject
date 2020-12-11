import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class RocketService {
  rockets: any[];
  rocket: any;
  loading = true;
  error: any;
  constructor(private apollo: Apollo) {}

  getRocket(id: string): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rocket(id: ${id}) {
              company
              wikipedia
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.rocket = result.data.rocket;
        this.loading = result.loading;
        this.error = result.error;
      });
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
