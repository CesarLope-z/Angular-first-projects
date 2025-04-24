import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housinglotacion';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HoustingService } from '../housting.service';
@Component({
  selector: 'app-home-component',
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation" ></app-housing-location>
    </section>
  `,
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];
  houstingService: HoustingService = inject(HoustingService);

  constructor() {
    this.housingLocationList = this.houstingService.getAllHousingLocations();
  }
}
