import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddCarComponent
 } from './add-car/add-car.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AddCarComponent],
  templateUrl:'./app.component.html' ,       
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'proxyAngular';
}
