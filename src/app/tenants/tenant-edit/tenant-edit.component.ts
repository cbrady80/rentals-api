import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TenantsService } from '../tenants.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrl: './tenant-edit.component.css'
})
export class TenantEditComponent implements OnInit {
  id: number;
  editMode = false;
  tenantForm: FormGroup

  constructor(private route: ActivatedRoute,
              private tenantsService: TenantsService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.tenantForm);
  }

  private initForm() {
    let tenantName = '';
    let tenantPhone = '';
    let tenantEmail = '';
    let tenantProperty = '';
    let tenantCurrent_rent = '';
    let tenantLease_period = '';
    let tenantCo_tenants = '';
    let tenantEmergency_contact = '';
    let tenantPets = '';
    let tenantNotes = '';


    if (this.editMode) {
      const tenant = this.tenantsService.getTenant(this.id);
      tenantName = tenant.name;
      tenantPhone = tenant.phone;
      tenantEmail = tenant.email;
      tenantProperty = tenant.property;
      tenantCurrent_rent = tenant.current_rent;
      tenantLease_period = tenant.lease_period;
      tenantCo_tenants = tenant.co_tenants;
      tenantEmergency_contact = tenant.emergency_contact;
      tenantPets = tenant.pets;
      tenantNotes = tenant.notes;
    }

    this.tenantForm = new FormGroup({
      'name': new FormControl(tenantName),
      'phone': new FormControl(tenantPhone),
      'email': new FormControl(tenantEmail),
      'property': new FormControl(tenantProperty),
      'current_rent': new FormControl(tenantCurrent_rent),
      'lease_period': new FormControl(tenantLease_period),
      'co_tenants': new FormControl(tenantCo_tenants),
      'emergency_contact': new FormControl(tenantEmergency_contact),
      'pets': new FormControl(tenantPets),
      'notes': new FormControl(tenantNotes)
    });
  }
}
