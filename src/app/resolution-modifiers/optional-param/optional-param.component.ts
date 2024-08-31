import { Component, Optional } from '@angular/core';
import { ResolutionModServiceService } from 'src/app/services/resolution-mod-service.service';

@Component({
  selector: 'app-optional-param',
  templateUrl: './optional-param.component.html',
  styleUrls: ['./optional-param.component.scss']
})
export class OptionalParamComponent {
  result:string[] = [];
  constructor(@Optional() private resService:ResolutionModServiceService){
    if(resService){
      this.resService.fromWhere = "Optional Component"
      this.result = this.resService.printMessage('Optional Component First Service Call')
    }

  }
}
