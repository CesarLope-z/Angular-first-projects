import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HoustingService } from '../housting.service';
import { HousingLocation } from '../housinglotacion';
@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  template: `<p>details works! {{ housingLocation.name }}</p>`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() housingLocation!: HousingLocation
  constructor() {  
  }
}
