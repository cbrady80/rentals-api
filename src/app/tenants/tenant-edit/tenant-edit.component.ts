import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TenantsService } from '../tenants.service';


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
              private tenantsService: TenantsService,
              private router: Router) { }

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
    if (this.editMode) {
      this.tenantsService.updateTenant(this.id, this.tenantForm.value);
    } else {
      this.tenantsService.addTenant(this.tenantForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
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
      'name': new FormControl(tenantName, Validators.required),
      'phone': new FormControl(tenantPhone, Validators.required),
      'email': new FormControl(tenantEmail, Validators.required),
      'property': new FormControl(tenantProperty, Validators.required),
      'current_rent': new FormControl(tenantCurrent_rent, Validators.required),
      'lease_period': new FormControl(tenantLease_period, Validators.required),
      'co_tenants': new FormControl(tenantCo_tenants, Validators.required),
      'emergency_contact': new FormControl(tenantEmergency_contact, Validators.required),
      'pets': new FormControl(tenantPets, Validators.required),
      'notes': new FormControl(tenantNotes, Validators.required)
    });
  }
}
