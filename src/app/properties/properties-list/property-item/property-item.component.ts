import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../property.model';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrl: './property-item.component.css'
})
export class PropertyItemComponent implements OnInit {
  @Input() property: Property;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {
    
  }

}
