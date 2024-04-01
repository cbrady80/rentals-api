import { Component, OnInit } from '@angular/core';
import { Tenant } from '../tenant.model';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrl: './tenant-list.component.css'
})
export class TenantListComponent implements OnInit {
  tenants: Tenant[] = [
    new Tenant(
      'Gwyn Buescher',
      '801-234-1234',
      'gwyn@email.com',
      '87 E 9270 S, Sandy',
      '$1300',
      '6/1/23 - 5/31/24',
      'none',
      'daughter 801-123-4321'
    ),
    new Tenant(
      'Shawn Breeland',
      '801-567-8901',
      'shawn@email.com',
      '89 E 9270 S, Sandy',
      '$1300',
      '6/1/23 - 5/31/24',
      'none',
      'dad 801-123-4321'
    )
  ];

  constructor() {  }

  ngOnInit(): void {
    
  }
}
