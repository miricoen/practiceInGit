import { Component } from '@angular/core';
import { __decorate } from "tslib"; // Add this line

@Component({
  selector: 'app-car-component',
  standalone: true,
  imports: [],
  templateUrl: './car-component.component.html',
  styleUrl: './car-component.component.css'
})
export class CarComponent {
  carName = 'Ford';
  carYear = 2017;
}
