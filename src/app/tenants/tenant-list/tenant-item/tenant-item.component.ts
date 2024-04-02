import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tenant } from '../../tenant.model';

@Component({
  selector: 'app-tenant-item',
  templateUrl: './tenant-item.component.html',
  styleUrl: './tenant-item.component.css'
})
export class TenantItemComponent implements OnInit {
  @Input() tenant: Tenant;
  @Output() tenantSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    
  }

  onSelected() {
    this.tenantSelected.emit();
  }
}
