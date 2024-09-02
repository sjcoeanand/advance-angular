import { FormControl } from '@angular/forms';
import { AutoserachService } from './../services/autoserach.service';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  movieData:any[] = [];
  searchvalue = new FormControl('');
  constructor(private service: AutoserachService){ }

  ngOnInit(): void {
    this.fetchData().subscribe((result)=>{
      this.movieData = result;
    });
    this.searchvalue.valueChanges.pipe(
      debounceTime(500), 
      distinctUntilChanged(), 
      switchMap(searchVal => this.fetchData(searchVal)))
    .subscribe((result)=>{
      console.log('result', result);      
      this.movieData = result;
    })
  }

  fetchData(query:string | null = ''){
    return this.service.filterMovieData(query);
  }
}
