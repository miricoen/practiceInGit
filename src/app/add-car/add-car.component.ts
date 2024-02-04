import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {CarService} from '../car.service'
import { Car } from '../car.model';
@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent implements OnInit {
  public addForm!: FormGroup;

  constructor(private _carService: CarService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      "id": new FormControl("", [Validators.required, Validators.minLength(9)]),
      "name": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "price": new FormControl("", [Validators.required]),
      "outOfStock": new FormControl("", [Validators.required]),
    })
  }

  save() {
    let c: Car= this.addForm.value
    console.log(c);
    this._carService.addCar(c).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

}
