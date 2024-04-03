import { Component, OnInit } from '@angular/core';
import { Tenant } from '../tenant.model';
import { TenantsService } from '../tenants.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrl: './tenant-details.component.css'
})
export class TenantDetailsComponent implements OnInit {
  tenant: Tenant;
  id: number;

  constructor(private tenantsService: TenantsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.tenant = this.tenantsService.getTenant(this.id);
        }
      );
  }

  onEditTenant() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
