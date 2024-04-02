import { Component, OnInit } from '@angular/core';
import { Property } from './property.model';
import { PropertiesService } from './properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
  providers: [PropertiesService]
})
export class PropertiesComponent implements OnInit {
  selectedProperty: Property;

  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {
    this.propertiesService.propertySelected
      .subscribe(
        (property: Property) => {
          this.selectedProperty = property;
        }
      );
  }

}
