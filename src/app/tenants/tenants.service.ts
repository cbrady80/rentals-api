import { Injectable } from '@angular/core';
import { Tenant } from './tenant.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TenantsService {
  tenantsChanged = new Subject<Tenant[]>();
  tenants: Tenant[] = [];

  // private tenants: Tenant[] = [
  //   new Tenant(
  //     'Gwyn Buescher',
  //     '801-234-1234',
  //     'gwyn@email.com',
  //     '87 E 9270 S, Sandy',
  //     '$1300',
  //     '6/1/23 - 5/31/24',
  //     'none',
  //     'daughter 801-123-4321',
  //     'none',
  //     'Single older lady.'
  //   ),
  //   new Tenant(
  //     'Shawn Breeland',
  //     '801-567-8901',
  //     'shawn@email.com',
  //     '89 E 9270 S, Sandy',
  //     '$1300',
  //     '6/1/23 - 5/31/24',
  //     'none',
  //     'dad 801-123-4321',
  //     'none',
  //     'Single male, has a young son.'
  //   )
  // ];

  constructor(private http: HttpClient) { }

  getTenants() {
    this.http.get('http://localhost:3000/tenants')
      .subscribe({
        next: (tenantData: {message: string, tenants: Tenant[]}) => {
          this.tenants = tenantData.tenants;
          this.tenantsChanged.next(this.tenants.slice());
        }
      })
  }

  getTenant(index: number) {
    return this.tenants[index];
  }

  addTenant(tenant: Tenant) {
    this.http
      .post<{message: string}>('http://localhost:3000/tenants', tenant)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.tenants.push(tenant);
        this.tenantsChanged.next(this.tenants.slice());
        console.log('Tenant added!');
      });
  }

  updateTenant(index: number, newTenant: Tenant, originalTenant: Tenant) {
    const position = this.tenants.indexOf(originalTenant);
    if (position < 0) {
      return;
    }
    // set the id of the new Document to the id of the old Document
    newTenant._id = originalTenant._id;
    
    this.http
      .put('http://localhost:3000/tenants/' + newTenant._id, newTenant)
      .subscribe(() => {
        this.tenants[index] = newTenant;
        this.tenantsChanged.next(this.tenants.slice());
        console.log('Tenant updated!');
      })
      
  }

  deleteTenant(tenant: Tenant) {
    const position = this.tenants.indexOf(tenant);
    if (position < 0) {
      return;
    }

    this.http
      .delete('http://localhost:3000/tenants/' + tenant._id)
      .subscribe(() => {
        this.tenants.splice(position, 1);
        this.tenantsChanged.next(this.tenants.slice());
        console.log('Deleted tenant!')
      });
    
  }
}
