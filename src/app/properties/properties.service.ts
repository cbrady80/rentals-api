import { Injectable } from '@angular/core';
import { Property } from './property.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  propertiesChanged = new Subject<Property[]>();
  properties: Property[] = [];
 
  // private properties: Property[] = [
  //   new Property(
  //     '87 East 9270 South, Sandy',
  //     '2 BR 1 BA Duplex Apt',
  //     'Gwyn Buescher',
  //     '$1300',
  //     '../assets/images/Duplex-2.jpg',
  //     'none'
  //   ),
  //   new Property(
  //     '89 East 9270 South, Sandy',
  //     '2 BR 1 BA Duplex Apt',
  //     'Shawn Breeland',
  //     '$1300',
  //     '../assets/images/Duplex-2.jpg',
  //     'none'
  //   )
  // ];

  constructor(private http: HttpClient) { }

  getProperties() {
    this.http.get('http://localhost:3000/properties')
      .subscribe({
        next: (propertyData: {message: string, properties: Property[]}) => {
          this.properties = propertyData.properties;
          this.propertiesChanged.next(this.properties.slice());
        }
      })
  }

  getProperty(index: number) {
    return this.properties[index];
  }

  addProperty(property: Property) {
    this.http
      .post<{message: string}>('http://localhost:3000/properties', property)
      .subscribe(responseData => {
          console.log(responseData.message);
          this.properties.push(property);
          this.propertiesChanged.next(this.properties.slice());
      });
  }

  updateProperty(index: number, newProperty: Property) {
    this.properties[index] = newProperty;
    this.propertiesChanged.next(this.properties.slice());
  }

  deleteProperty(property: Property) {
    const position = this.properties.indexOf(property);
    if (position < 0) {
      return;
    }

    this.http
      .delete('http://localhost:3000/properties/' + property.address)
      .subscribe(() => {
        this.properties.splice(position, 1);
        this.propertiesChanged.next(this.properties.slice());
        console.log('Deleted property!');
      });
  }
}
