import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { RocketsComponent } from './rockets/rockets.component';
import { MissionsComponent } from './missions/missions.component';
import { CompanyComponent } from './company/company.component';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,

    HeaderComponent,
    RocketsComponent,
    MissionsComponent,
    CompanyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,

    InputTextModule,
    DataViewModule,
    DropdownModule,
    DynamicDialogModule,
    MenuModule,
    MegaMenuModule,
    BreadcrumbModule,
    OrganizationChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
