import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PropertiesService } from '../properties.service';


@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrl: './property-edit.component.css'
})
export class PropertyEditComponent implements OnInit {
  id: number;
  editMode = false;
  propertyForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private propertiesService: PropertiesService,
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
    // const newProperty = new Property(
    //   this.propertyForm.value['address'],
    //   this.propertyForm.value['description'],
    //   this.propertyForm.value['current_tenants'],
    //   this.propertyForm.value['current_rent'],
    //   this.propertyForm.value['imagePath'],
    //   this.propertyForm.value['notes']
    // );
    if (this.editMode) {
      this.propertiesService.updateProperty(this.id, this.propertyForm.value);
    } else {
      this.propertiesService.addProperty(this.propertyForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let propertyAddress = '';
    let propertyDescription = '';
    let propertyCurrent_tenants = '';
    let propertyCurrent_rent = '';
    let propertyImagePath = '';
    let propertyNotes = '';


    if (this.editMode) {
      const property = this.propertiesService.getProperty(this.id);
      propertyAddress = property.address;
      propertyDescription = property.description;
      propertyCurrent_tenants = property.current_tenants;
      propertyCurrent_rent = property.current_rent;
      propertyImagePath = property.imagePath;
      propertyNotes = property.notes;
    }

    this.propertyForm = new FormGroup({
      'address': new FormControl(propertyAddress, Validators.required),
      'description': new FormControl(propertyDescription, Validators.required),
      'current_tenants': new FormControl(propertyCurrent_tenants, Validators.required),
      'current_rent': new FormControl(propertyCurrent_rent, Validators.required),
      'imagePath': new FormControl(propertyImagePath, Validators.required),
      'notes': new FormControl(propertyNotes, Validators.required)
    });
  }
}
