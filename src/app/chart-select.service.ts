import { Injectable } from '@angular/core';
import {Observable,Subject, BehaviorSubject} from 'rxjs';
@Injectable()
export class chartSelectedService {

  myMethod$: Observable<any>;
  details$:Observable<any>;
  private myMethodSubject = new Subject<any>();
  private detailsData = new BehaviorSubject<any>("");

  constructor() {
      this.myMethod$ = this.myMethodSubject.asObservable();
      this.details$ = this.detailsData.asObservable();
  }

  myMethod(data) {
      // I have data! Let's return it so subscribers can use it!
      // we can do stuff with data if we want
      this.myMethodSubject.next(data);
      
  }
  details(data){
    this.detailsData.next(data);
    console.log(data);
    console.log(this.details);  
    
  }


}