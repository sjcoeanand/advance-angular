import { Component, inject } from '@angular/core';
import { DummyJsonService } from '../services/dummy-json.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private dummyJsonInstance: DummyJsonService){

  }
  postList:any[] = [];
  activeRoute:ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this.dummyJsonInstance.fetchDummyJson().subscribe(res => this.postList = res.splice(0, 10));
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activeRoute.fragment.subscribe((res)=>{
      console.log('activeRoute', res);      
      this.scrollToSection(res);
    })
    
  }
  scrollToSection(value:any){
    document.getElementById(value)?.scrollIntoView({behavior: 'smooth'})
  }

  scrollToTop(){
    document.documentElement.scrollTop = 0;
  }
}
