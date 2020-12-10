import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Company } from '../company';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  data: TreeNode[];
  company_info: Company;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getCompanyInfo();
    this.generateOrgChart(this.company_info);
  }
  getCompanyInfo(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            company {
              founded
              founder
              summary
              name
              ceo
              coo
              cto
              cto_propulsion
              employees
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.company_info = result.data.company;
      });
  }

  generateOrgChart(company: Company): void {
    this.data = [
      {
        label: 'CEO',
        data: { name: 'Elon Musk' },
        expanded: true,
        children: [
          {
            label: 'CTO',
            data: { name: 'Elon Musk' },
            expanded: true,
            children: [
              {
                label: 'CTO Propulsion',
                data: { name: 'Tom Mueller' },
                expanded: true,
                type: 'leaf',
              },
            ],
          },
          {
            label: 'COO',
            data: { name: 'Gwynne Shotwell' },
            expanded: true,
          },
        ],
      },
    ];
  }
}
