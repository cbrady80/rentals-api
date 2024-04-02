import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../property.model';
import { PropertiesService } from '../../properties.service';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrl: './property-item.component.css'
})
export class PropertyItemComponent implements OnInit {
  @Input() property: Property;

  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {
    
  }

  onSelected() {
    this.propertiesService.propertySelected.emit(this.property);
  }
}
