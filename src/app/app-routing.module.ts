import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { TenantsComponent } from './tenants/tenants.component';

const routes: Routes = [
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: 'properties', component: PropertiesComponent},
  { path: 'tenants', component: TenantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
