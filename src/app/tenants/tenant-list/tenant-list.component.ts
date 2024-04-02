import { Component, OnInit } from '@angular/core';
import { Tenant } from '../tenant.model';
import { TenantsService } from '../tenants.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrl: './tenant-list.component.css'
})
export class TenantListComponent implements OnInit {
  tenants: Tenant[] = [];

  constructor(private tenantsService: TenantsService) {  }

  ngOnInit(): void {
    this.tenants = this.tenantsService.getTenants();
  }

}
