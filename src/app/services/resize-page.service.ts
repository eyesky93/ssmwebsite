import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResizePageService {
  private resizeSubject: Subject<number>;
  constructor() {
    this.resizeSubject = new Subject <number>();
  }
  updatePageWidth(newWidth:number){
    this.resizeSubject.next(newWidth)
  }
  resizeObservable(){
    return this.resizeSubject.asObservable();
  }
}
