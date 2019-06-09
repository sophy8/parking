import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError, tap, take, filter } from 'rxjs/operators';

//I use first part of API = https://cors-anywhere.herokuapp.com. In this way I create calls from https(github) to http(citysdk).
// Because you cant properly create requests from https to http

export const URL = 'https://cors-anywhere.herokuapp.com/http://api.citysdk.waag.org/layers/parking.garage/objects?in=admr.nl.amsterdam';

@Injectable({
  providedIn: 'root'
})
export class ParkingServiceService {

  constructor(private http: HttpClient) { }
//using rxjs operators and create Observable
  getAll() {
    return this.http.get(URL).pipe(
      take(1),
      tap(() => { }),
      catchError((res) => {
        throw new Error(res);
      })
    );
  }

}
