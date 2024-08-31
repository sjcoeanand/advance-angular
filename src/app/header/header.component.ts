import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  router = inject(Router);
  currentRoute:string = '';
  constructor(){
    
    this.router.events.pipe(
    filter(event => event instanceof NavigationEnd))
    .subscribe((res) => {
      let routeObject = JSON.parse(JSON.stringify(res));
      this.currentRoute = routeObject.url;
    })
  }
  // currentroutePath
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  ngOnInit(): void {
    // this.route.url.subscribe((event) => {
    //   this.currentroutePath  = event[0].path
    // }); 
  }
}
