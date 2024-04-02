import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Property } from '../property.model';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrl: './properties-list.component.css'
})
export class PropertiesListComponent implements OnInit {
  @Output() propertyWasSelected = new EventEmitter<Property>();

  properties: Property[] = [
    new Property(
      '87 East 9270 South, Sandy',
      '2 BR 1 BA Duplex Apt',
      'Gwyn Buescher',
      '$1300',
      '../assets/images/Duplex-2.jpg',
      'none'
    ),
    new Property(
      '89 East 9270 South, Sandy',
      '2 BR 1 BA Duplex Apt',
      'Shawn Breeland',
      '$1300',
      '../assets/images/Duplex-2.jpg',
      'none'
    )
  ];
  
  constructor() {  }

  ngOnInit(): void {
    
  }

  onPropertySelected(property: Property) {
    this.propertyWasSelected.emit(property);
  }
}
