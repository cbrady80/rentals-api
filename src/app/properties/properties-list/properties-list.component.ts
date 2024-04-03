import { Component, OnInit } from '@angular/core';
import { Property } from '../property.model';
import { PropertiesService } from '../properties.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrl: './properties-list.component.css'
})
export class PropertiesListComponent implements OnInit {
  properties: Property[];
  
  constructor(private propertiesService: PropertiesService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.properties = this.propertiesService.getProperties();
  }

  onAddProperty() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
