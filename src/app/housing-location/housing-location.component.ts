import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      wohnungsstandort
    </p>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {

}