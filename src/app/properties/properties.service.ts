import { Injectable } from '@angular/core';
import { Property } from './property.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  propertiesChanged = new Subject<Property[]>();
 
  private properties: Property[] = [
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

  constructor() { }

  getProperties() {
    return this.properties.slice();
  }

  getProperty(index: number) {
    return this.properties[index];
  }

  addProperty(property: Property) {
    this.properties.push(property);
    this.propertiesChanged.next(this.properties.slice());
  }

  updateProperty(index: number, newProperty: Property) {
    this.properties[index] = newProperty;
    this.propertiesChanged.next(this.properties.slice());
  }

  deleteProperty(index: number) {
    this.properties.splice(index, 1);
    this.propertiesChanged.next(this.properties.slice());
  }
}
