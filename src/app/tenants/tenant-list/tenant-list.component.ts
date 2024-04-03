import { Component, OnInit } from '@angular/core';
import { Tenant } from '../tenant.model';
import { TenantsService } from '../tenants.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrl: './tenant-list.component.css'
})
export class TenantListComponent implements OnInit {
  tenants: Tenant[];

  constructor(private tenantsService: TenantsService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.tenants = this.tenantsService.getTenants();
  }

  onAddTenant() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
