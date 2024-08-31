import { DummyJsonService } from './../services/dummy-json.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss']
})
export class BookStoreComponent {
  postList:any[] = [];
  constructor(private dummyJsonInstance: DummyJsonService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.dummyJsonInstance.fetchDummyJson().subscribe(res => this.postList = res.splice(0, 10));
  }
}
