import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  constructor(private _http: HttpClient) { }

  getCarsList(): Observable<Car[]> {
    return this._http.get<Car[]>('/api/car')
  }

  addCar(car: Car) {
    return this._http.post('/api/car', car)
  }
}

