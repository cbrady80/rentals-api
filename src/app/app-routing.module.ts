import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { TenantsComponent } from './tenants/tenants.component';
import { PropertyStartComponent } from './properties/property-start/property-start.component';
import { TenantStartComponent } from './tenants/tenant-start/tenant-start.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';
import { TenantDetailsComponent } from './tenants/tenant-details/tenant-details.component';
import { PropertyEditComponent } from './properties/property-edit/property-edit.component';
import { TenantEditComponent } from './tenants/tenant-edit/tenant-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: 'properties', component: PropertiesComponent, children: [
    { path: '', component: PropertyStartComponent },
    { path: 'new', component: PropertyEditComponent },
    { path: ':id', component: PropertyDetailsComponent },
    { path: ':id/edit', component: PropertyEditComponent }
  ]},
  { path: 'tenants', component: TenantsComponent, children: [
    { path: '', component: TenantStartComponent },
    { path: 'new', component: TenantEditComponent },
    { path: ':id', component: TenantDetailsComponent },
    { path: ':id/edit', component: TenantEditComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
