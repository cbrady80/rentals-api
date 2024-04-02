import { Component, Input } from '@angular/core';
import { Property } from '../property.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent {
  @Input() property: Property;

}
