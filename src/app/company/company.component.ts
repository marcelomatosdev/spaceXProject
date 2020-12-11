import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Company } from '../company';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  company_info: Company;
  data: TreeNode[];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getCompanyInfo();
    this.getTree();
  }

  getTree(): void {
    this.data = [
      {
        label: 'CEO',
        data: { name: 'Elon Musk' },
        expanded: true,
        children: [
          {
            label: 'CTO',
            data: { name: '' },
            expanded: true,
            children: [
              {
                label: 'CTO',
                data: { name: 'Elon Musk' },
                expanded: true,
              },
              {
                label: 'CTO Propulsion',
                data: { name: 'Tom Mueller' },
                expanded: true,
              },
            ],
          },
          {
            label: 'COO',
            data: { name: '' },
            expanded: true,
            children: [
              {
                label: 'COO',
                data: { name: 'Gwynne Shotwell' },
                // data: { name: this.company_info.cto },
                expanded: true,
              },
            ],
          },
        ],
      },
    ];
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
}
