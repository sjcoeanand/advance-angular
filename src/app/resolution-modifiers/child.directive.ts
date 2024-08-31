import { Directive, Host, Optional } from '@angular/core';
import { ResolutionModServiceService } from '../services/resolution-mod-service.service';

@Directive({
  selector: '[appChild]',
  // providers: [ResolutionModServiceService]
})
export class ChildDirective {

  constructor(@Host() private resolutionInst: ResolutionModServiceService) { 
    this.resolutionInst.fromWhere = 'Child Directive';
    this.resolutionInst.printMessage("child directive for host annotation test");
  }

}
