import { Component, OnDestroy, OnInit } from '@angular/core';
import { Property } from '../property.model';
import { PropertiesService } from '../properties.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrl: './properties-list.component.css'
})
export class PropertiesListComponent implements OnInit, OnDestroy {
  properties: Property[];
  subscription: Subscription;
  
  constructor(private propertiesService: PropertiesService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.propertiesService.getProperties();
    this.subscription = this.propertiesService.propertiesChanged
      .subscribe(
        (properties: Property[]) => {
          this.properties = properties;
        }
      );
    
  }

  onAddProperty() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
