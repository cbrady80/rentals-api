import { Component, OnInit } from '@angular/core';
import { Tenant } from './tenant.model';
import { TenantsService } from './tenants.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.css',
  providers: [TenantsService]
})
export class TenantsComponent implements OnInit {
  selectedTenant: Tenant;

  constructor(private tenantsService: TenantsService) {}

  ngOnInit(): void {
    this.tenantsService.tenantSelected
      .subscribe(
        (tenant: Tenant) => {
          this.selectedTenant = tenant;
        }
      )
  }
}
