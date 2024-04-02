import { Component } from '@angular/core';
import { Property } from './property.model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  selectedProperty: Property;

}
