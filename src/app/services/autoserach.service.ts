import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoserachService {

  dataUrl = '/assets/movie-data.json';
  constructor(private http: HttpClient) { 
    
  }

  filterMovieData(searchKey:any):Observable<any>{
    console.log('searchKey', searchKey);    
      return this.http.get<any[]>(this.dataUrl).pipe(map(data => {
        return data.filter((item:any) => {
          return (item.label.toLowerCase().includes(searchKey.toLowerCase()) || item.year == searchKey)
        });
      }))
  }
}






































// return this.http.get<any[]>(this.dataUrl).pipe(map(val => {
//   return val.filter((item:any) => {
//        return (item.label.toLowerCase().includes(searchKey.toLowerCase()) || item.year === +searchKey)
//      })
// }));