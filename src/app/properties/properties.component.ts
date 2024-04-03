import { Component, OnInit } from '@angular/core';

import { PropertiesService } from './properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css',
  providers: [PropertiesService]
})
export class PropertiesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
   
  }

}
