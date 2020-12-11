import { Component, OnInit } from '@angular/core';

import { Company } from '../company';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  company_info: Company;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getCompanyInfo();
  }

  getCompanyInfo(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            company {
              summary
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.company_info = result.data.company;
      });
  }
}
