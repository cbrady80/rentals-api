import { Component, Input } from '@angular/core';
import { Tenant } from '../tenant.model';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrl: './tenant-details.component.css'
})
export class TenantDetailsComponent {
  @Input() tenant: Tenant;
}
