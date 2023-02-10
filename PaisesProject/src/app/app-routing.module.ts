import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';

const routes: Routes = [
  {
    path: 'por-pais',
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'por-region',
    component: PorRegionComponent,
    pathMatch: 'full',
  },
  {
    path: 'por-capital',
    component: PorCapitalComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'por-pais',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
