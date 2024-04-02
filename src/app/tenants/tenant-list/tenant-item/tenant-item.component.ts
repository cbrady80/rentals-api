import { Component, Input, OnInit } from '@angular/core';
import { Tenant } from '../../tenant.model';
import { TenantsService } from '../../tenants.service';

@Component({
  selector: 'app-tenant-item',
  templateUrl: './tenant-item.component.html',
  styleUrl: './tenant-item.component.css'
})
export class TenantItemComponent implements OnInit {
  @Input() tenant: Tenant;

  constructor(private tenantsService: TenantsService) {}

  ngOnInit(): void {
    
  }

  onSelected() {
    this.tenantsService.tenantSelected.emit(this.tenant);
  }
}
