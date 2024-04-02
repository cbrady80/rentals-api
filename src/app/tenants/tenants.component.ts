import { Component } from '@angular/core';
import { Tenant } from './tenant.model';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.css'
})
export class TenantsComponent {
  selectedTenant: Tenant;
}
