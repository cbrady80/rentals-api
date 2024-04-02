import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Property } from '../../property.model';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrl: './property-item.component.css'
})
export class PropertyItemComponent implements OnInit {
  @Input() property: Property;
  @Output() propertySelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    
  }

  onSelected() {
    this.propertySelected.emit();
  }
}
