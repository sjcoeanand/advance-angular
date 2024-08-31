import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyJsonService {

  constructor() { }
  fetchDummyJson(): Observable<any[]> {
    const dataSource = from(fetch('https://jsonplaceholder.typicode.com/posts'));  
    return dataSource.pipe(
      switchMap(res => res.json())
    );
  }
}
