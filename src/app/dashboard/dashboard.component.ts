import { Component, OnInit } from '@angular/core';

import { Rocket } from '../rocket';
import { Company } from '../company';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  rockets: Rocket[] = [];
  company_info: Company;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getRockets();
    this.getCompanyInfo();
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
  getCompanyInfo(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            company {
              employees
              founded
              founder
              summary
              name
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.company_info = result.data.company;
      });
  }
}
