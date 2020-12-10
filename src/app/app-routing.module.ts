import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RocketsComponent } from './rockets/rockets.component';
import { MissionsComponent } from './missions/missions.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rockets', component: RocketsComponent },
  { path: 'missions', component: MissionsComponent },
  { path: 'company', component: CompanyComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
