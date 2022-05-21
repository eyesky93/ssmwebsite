import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import {
//   ProfilePictureAdress,
//   HebrewCV,
//   EnglishCV,
// } from 'src/app/my-data.service';
@Injectable({
  providedIn: 'root',
})
export class GetMyDataService {
  constructor(private http: HttpClient) {}
  // getData(profilePictureAdress: string,hebrewCV: string,englishCV: string): Observable<String> {
  //   return this.http.get<string>
  // }
}
