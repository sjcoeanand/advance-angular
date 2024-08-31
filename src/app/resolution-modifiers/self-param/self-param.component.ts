import { Component, Self, SkipSelf } from '@angular/core';
import { ResolutionModServiceServiceSelf } from 'src/app/services/resolution-mod-service.service';


@Component({
  selector: 'app-self-param',
  templateUrl: './self-param.component.html',
  styleUrls: ['./self-param.component.scss'],
  providers: [ResolutionModServiceServiceSelf]
})


export class SelfParamComponent {
  result:string[] = [];
  resultSkipSelf:string[] = [];
  constructor(
    @Self() private resService:ResolutionModServiceServiceSelf,
    @SkipSelf() private resServiceforSkipSelf:ResolutionModServiceServiceSelf
  ){
    if(resService){
      this.resService.fromWhere = "Self Component"
      this.result = this.resService.printMessage('Self Component First Service Call')
    }
    if(resServiceforSkipSelf){
      this.resServiceforSkipSelf.fromWhere = "Self Component"
      this.resultSkipSelf = this.resServiceforSkipSelf.printMessage('SkipSelf Component First Service Call')
    }

  }
}


