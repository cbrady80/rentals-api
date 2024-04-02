import { Component, OnInit } from '@angular/core';
import { Property } from '../property.model';
import { PropertiesService } from '../properties.service';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrl: './properties-list.component.css'
})
export class PropertiesListComponent implements OnInit {
  properties: Property[] = [];
  
  constructor(private propertiesService: PropertiesService) {  }

  ngOnInit(): void {
    this.properties = this.propertiesService.getProperties();
  }

}
