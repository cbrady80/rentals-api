import { Injectable } from '@angular/core';
import { Tenant } from './tenant.model';

@Injectable({
  providedIn: 'root'
})
export class TenantsService {

  private tenants: Tenant[] = [
    new Tenant(
      'Gwyn Buescher',
      '801-234-1234',
      'gwyn@email.com',
      '87 E 9270 S, Sandy',
      '$1300',
      '6/1/23 - 5/31/24',
      'none',
      'daughter 801-123-4321',
      'none',
      'Single older lady.'
    ),
    new Tenant(
      'Shawn Breeland',
      '801-567-8901',
      'shawn@email.com',
      '89 E 9270 S, Sandy',
      '$1300',
      '6/1/23 - 5/31/24',
      'none',
      'dad 801-123-4321',
      'none',
      'Single male, has a young son.'
    )
  ];

  constructor() { }

  getTenants() {
    return this.tenants.slice();
  }

  getTenant(index: number) {
    return this.tenants[index];
  }
}
