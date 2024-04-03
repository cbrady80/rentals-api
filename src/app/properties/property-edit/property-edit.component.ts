import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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
              private propertiesService: PropertiesService) { }

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
    console.log(this.propertyForm);
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
      'address': new FormControl(propertyAddress),
      'description': new FormControl(propertyDescription),
      'current_tenants': new FormControl(propertyCurrent_tenants),
      'current_rent': new FormControl(propertyCurrent_rent),
      'imagePath': new FormControl(propertyImagePath),
      'notes': new FormControl(propertyNotes)
    });
  }
}
