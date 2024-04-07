import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tenant } from '../tenant.model';
import { TenantsService } from '../tenants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrl: './tenant-list.component.css'
})
export class TenantListComponent implements OnInit, OnDestroy {
  tenants: Tenant[];
  subscription: Subscription;

  constructor(private tenantsService: TenantsService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.tenantsService.getTenants();
    this.subscription = this.tenantsService.tenantsChanged
      .subscribe(
        (tenants: Tenant[]) => {
          this.tenants = tenants;
        }
      );
    
  }

  onAddTenant() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
