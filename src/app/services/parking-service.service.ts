import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, catchError, tap, take } from 'rxjs/operators';

export const URL ='http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25';

@Injectable({
  providedIn: 'root'
})
export class ParkingServiceService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(URL).pipe(
      take(1),
      tap(()=>{}),
      catchError((res) => {
        throw new Error(res);
      })
    )
  }

}
