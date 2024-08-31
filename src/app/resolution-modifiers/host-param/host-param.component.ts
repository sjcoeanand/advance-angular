import { Component } from '@angular/core';
import { ResolutionModServiceService } from 'src/app/services/resolution-mod-service.service';

@Component({
  selector: 'app-host-param',
  templateUrl: './host-param.component.html',
  styleUrls: ['./host-param.component.scss'],
  providers: [ResolutionModServiceService]
})
export class HostParamComponent {
  result:string[] = [];
  constructor(private resService:ResolutionModServiceService){
    if(resService){
      this.resService.fromWhere = "Host Component"
      this.result = this.resService.printMessage('Host Component First Service Call')
    }

  }
}
