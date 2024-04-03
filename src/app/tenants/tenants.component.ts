import { Component, OnInit } from '@angular/core';

import { TenantsService } from './tenants.service';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrl: './tenants.component.css',
  providers: [TenantsService]
})
export class TenantsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }
}
