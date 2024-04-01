import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PropertiesComponent } from './properties/properties.component';
import { TenantsComponent } from './tenants/tenants.component';
import { PropertiesListComponent } from './properties/properties-list/properties-list.component';
import { PropertyDetailsComponent } from './properties/property-details/property-details.component';
import { PropertyEditComponent } from './properties/property-edit/property-edit.component';
import { TenantListComponent } from './tenants/tenant-list/tenant-list.component';
import { TenantEditComponent } from './tenants/tenant-edit/tenant-edit.component';
import { TenantDetailsComponent } from './tenants/tenant-details/tenant-details.component';
import { PropertyItemComponent } from './properties/properties-list/property-item/property-item.component';
import { TenantItemComponent } from './tenants/tenant-list/tenant-item/tenant-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertiesComponent,
    TenantsComponent,
    PropertiesListComponent,
    PropertyDetailsComponent,
    PropertyEditComponent,
    TenantListComponent,
    TenantEditComponent,
    TenantDetailsComponent,
    PropertyItemComponent,
    TenantItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
