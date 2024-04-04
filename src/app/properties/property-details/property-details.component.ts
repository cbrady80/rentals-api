import { Component, OnInit } from '@angular/core';
import { Property } from '../property.model';
import { PropertiesService } from '../properties.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit {
  property: Property;
  id: number;

  constructor(private propertiesService: PropertiesService, 
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.property = this.propertiesService.getProperty(this.id);
        }
      );
  }

  onEditProperty() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteProperty() {
    this.propertiesService.deleteProperty(this.id);
    this.router.navigate(['/properties']);
  }

}
