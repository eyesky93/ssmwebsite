import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class MyDataService implements InMemoryDbService {
  createDb() {
    const ProfilePictureAdress = '../assets/Profile-Picture.jpg';
    const HebrewCV = '../assets/CV-Shimon-Sukholuski-Hebrew';
    const EnglishCV = '../assets/CV-Shimon-Sukholuski-English';
    return { ProfilePictureAdress, HebrewCV, EnglishCV };
  }
  constructor() {}
}
