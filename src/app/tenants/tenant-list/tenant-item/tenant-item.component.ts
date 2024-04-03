import { Component, Input, OnInit } from '@angular/core';
import { Tenant } from '../../tenant.model';

@Component({
  selector: 'app-tenant-item',
  templateUrl: './tenant-item.component.html',
  styleUrl: './tenant-item.component.css'
})
export class TenantItemComponent implements OnInit {
  @Input() tenant: Tenant;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {
    
  }

}
